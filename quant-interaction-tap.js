(function (root) {
    'use strict';
    if (root.QuantInteractionTap) root.QuantInteractionTap.unload();
    const actionName = 'Клавіша дії';
    const wrapped = new Map(), cycles = new Map(), releaseKeys = new Map(), timers = new Set();
    let settings = null, alive = true, pending = false, lastPickup = -Infinity, lastRefresh = -Infinity;
    let targetSignature = '';
    function distance(a, b) { return Math.hypot(a.x-b.x, a.y-b.y, a.z-b.z); }
    function valid(entity) {
        const pool = entity && mp[entity.type === 'player' ? 'players' : entity.type === 'vehicle' ? 'vehicles' : 'objects'];
        return !!entity && !!entity.handle && !!pool && pool.exists(entity);
    }
    function blocked() {
        const p = mp.players.local;
        return !alive || !settings || mp.bindBlocker() || !!p.vehicle || !!mp.interactionEntity ||
            !!p.isFreeze || p.getVariable('cuffedBy') != null || p.getVariable('boundedBy') != null;
    }
    function aim() {
        const origin = mp.game.cam.getGameplayCoord(), rotation = mp.game.cam.getGameplayCamRot(2);
        const pitch = rotation.x * Math.PI/180, yaw = rotation.z * Math.PI/180;
        return { origin, direction: { x: -Math.sin(yaw)*Math.cos(pitch), y: Math.cos(yaw)*Math.cos(pitch), z: Math.sin(pitch) } };
    }
    function visible(position, entity) {
        const hit = mp.raycasting.testPointToPoint(mp.game.cam.getGameplayCoord(),
            new mp.Vector3(position.x, position.y, position.z), mp.players.local.handle, 31);
        if (!hit) return true;
        if (entity && hit.entity && hit.entity.handle === entity.handle) return true;
        return !!hit.position && distance(hit.position, position) <= 0.15;
    }
    function select() {
        if (blocked()) return null;
        if (root.QuantInteractionAim) return root.QuantInteractionAim.resolve({ getGroundItems: settings.getGroundItems });
        const player = mp.players.local, ray = aim();
        let item = null, best = Infinity;
        const groundItems = settings.getGroundItems();
        if (!Array.isArray(groundItems)) throw new TypeError('getGroundItems має повернути масив');
        for (const candidate of groundItems) {
            if (!candidate || !['string','number'].includes(typeof candidate.id) || !candidate.position) continue;
            const p = candidate.position;
            if (![p.x,p.y,p.z].every(Number.isFinite) || candidate.dimension !== player.dimension ||
                distance(player.position,p) > 2.5 || candidate.entity && !valid(candidate.entity)) continue;
            const x = p.x-ray.origin.x, y = p.y-ray.origin.y, z = p.z-ray.origin.z;
            const along = x*ray.direction.x+y*ray.direction.y+z*ray.direction.z;
            if (along <= 0) continue;
            const offset = Math.hypot(x-along*ray.direction.x,y-along*ray.direction.y,z-along*ray.direction.z);
            const radius = Math.min(0.22, Math.max(0.06, along*Math.tan(4*Math.PI/180)));
            if (offset > radius || !visible(p,candidate.entity)) continue;
            const score = offset/radius + along*0.001;
            if (score < best) { best = score; item = candidate; }
        }
        if (item) return { kind:'item', item };
        const entity = player.raycasting && player.raycasting.entity;
        if (!valid(entity) || entity === player || entity.dimension !== player.dimension ||
            !['player','vehicle'].includes(entity.type) || distance(player.position,entity.position) > 2.5) return null;
        if (entity.type === 'player' && player.variable_attachedObject) return null;
        if (typeof player.hasClearLosTo === 'function' && !player.hasClearLosTo(entity.handle,17)) return null;
        return { kind:entity.type, entity };
    }
    function publish(target) {
        const data = target ? { kind:target.kind, id:target.kind === 'item' ? target.item.id : target.entity.remoteId } : null;
        const signature = JSON.stringify(data);
        if (signature === targetSignature) return;
        targetSignature = signature;
        settings.onTargetChanged(data);
    }
    function run(target) {
        if (target.kind === 'player') {
            const e = target.entity, sqlId = e.getVariable('sqlId');
            mp.events.call('interactionMenu.showPlayerMenu', e, {
                hasCuffs:e.getVariable('cuffedBy') != null, followTo:e.getVariable('followTo') != null,
                hasBag:e.getVariable('bagBy') != null,
                hasFamiliar:!!(sqlId && mp.familiars && mp.familiars.params.includes(sqlId))
            });
        } else if (target.kind === 'vehicle') {
            mp.interactionEntity = target.entity;
            try { mp.events.call('interactionMenu.openVehicleMenu'); }
            catch (error) { mp.interactionEntity = null; throw error; }
        } else {
            if (pending || Date.now()-lastPickup < 500) return;
            pending = true; lastPickup = Date.now();
            const pickup = settings.pickup;
            Promise.resolve().then(() => { if (alive) return pickup(target.item.id); })
                .catch(report).finally(() => { pending = false; });
        }
    }
    function report(error) {
        if (mp.console && mp.console.logError) mp.console.logError('[Взаємодія] '+error.message);
    }
    function begin(key) {
        if (cycles.has(key)) return cycles.get(key);
        const cycle = { consumed:false };
        cycles.set(key,cycle);
        try {
            const target = select();
            publish(target);
            if (target) { cycle.consumed = true; run(target); }
        } catch (error) { cycle.consumed = true; report(error); }
        return cycle;
    }
    function release(key) {
        const timer = setTimeout(() => { timers.delete(timer); cycles.delete(key); },0);
        timers.add(timer);
    }
    function refresh() {
        const entries = (mp.keys.data || []).filter(e => e.name === actionName);
        const primary = entries.find(e => e.toggle &&
            Function.prototype.toString.call(wrapped.get(e)?.original || e.handler).includes('interactionMenu.showPlayerMenu'));
        if (!primary) return;
        const key = primary.key;
        for (const entry of entries) {
            if (wrapped.has(entry) || typeof entry.handler !== 'function') continue;
            const original = entry.handler;
            const text = Function.prototype.toString.call(original);
            const main = entry === primary, generic = text.includes('EventKeyDownE');
            const wrapper = function (...args) {
                if (!alive || !settings || entry.key !== primary.key) return original.apply(this,args);
                const cycle = entry.toggle ? begin(entry.key) : cycles.get(entry.key);
                if (cycle && cycle.consumed) return;
                if (generic) { if (!blocked()) return settings.worldAction(); return; }
                return original.apply(this,args);
            };
            mp.keys.unbind(entry.key,entry.toggle,original);
            entry.handler = wrapper;
            mp.keys.bind(entry.key,entry.toggle,wrapper);
            wrapped.set(entry,{ original,wrapper,main });
        }
        for (const [oldKey,handler] of releaseKeys) {
            if (oldKey !== key) { mp.keys.unbind(oldKey,false,handler); releaseKeys.delete(oldKey); cycles.delete(oldKey); }
        }
        if (!releaseKeys.has(key)) {
            const handler = () => release(key);
            mp.keys.bind(key,false,handler); releaseKeys.set(key,handler);
        }
    }
    function render() {
        if (!settings || !alive) return;
        try {
            refresh();
            const now = Date.now();
            if (now-lastRefresh >= 100) {
                lastRefresh = now; publish(select());
            }
        } catch (error) { report(error); }
    }
    const api = Object.freeze({
        install(options) {
            if (!alive) throw new Error('Модуль вивантажено');
            for (const key of ['getGroundItems','pickup','worldAction','onTargetChanged']) {
                if (!options || typeof options[key] !== 'function') throw new TypeError('Потрібна функція '+key);
            }
            settings = options; targetSignature = ''; refresh();
            if (root.QuantInteractionAim) root.QuantInteractionAim.configure({
                getGroundItems: settings.getGroundItems, onTargetChanged: settings.onTargetChanged
            });
        },
        getTarget() {
            const t = select();
            return t ? { kind:t.kind,id:t.kind === 'item' ? t.item.id : t.entity.remoteId } : null;
        },
        unload() {
            if (!alive) return;
            alive = false;
            for (const [entry,state] of wrapped) {
                if (entry.handler !== state.wrapper) continue;
                mp.keys.unbind(entry.key,entry.toggle,state.wrapper);
                entry.handler = state.original;
                mp.keys.bind(entry.key,entry.toggle,state.original);
            }
            for (const [key,handler] of releaseKeys) mp.keys.unbind(key,false,handler);
            for (const timer of timers) clearTimeout(timer);
            wrapped.clear(); releaseKeys.clear(); cycles.clear(); timers.clear();
            mp.events.remove('render',render);
            if (settings) settings.onTargetChanged(null);
            settings = null;
            if (root.QuantInteractionTap === api) delete root.QuantInteractionTap;
        }
    });
    root.QuantInteractionTap = api;
    mp.events.add('render',render);
})(typeof globalThis !== 'undefined' ? globalThis : global);
