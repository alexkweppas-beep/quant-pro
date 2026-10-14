(function (root) {
    'use strict';
    if (root.QuantInteractionAim) root.QuantInteractionAim.unload();
    let alive = true, enabled = true, attachment = null, previous = null;
    let settings = { getGroundItems: () => [], onTargetChanged: data => mp.events.call('quantInteractionAim:target', JSON.stringify(data)) };
    let lastUpdate = -Infinity, lastSignature = '';
    const distance = (a,b) => Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
    const identity = target => target.kind + ':' + (target.kind === 'item' ? target.item.id : target.entity.remoteId);
    function valid(entity) {
        const pool = entity && mp[entity.type === 'player' ? 'players' : entity.type === 'vehicle' ? 'vehicles' : 'objects'];
        return !!entity && !!entity.handle && !!pool && pool.exists(entity);
    }
    function blocked() {
        const p = mp.players.local;
        return !alive || !enabled || mp.bindBlocker() || p.vehicle || p.isFreeze || mp.interactionEntity ||
            p.getVariable('cuffedBy') != null || p.getVariable('boundedBy') != null ||
            mp.clientStorage && mp.clientStorage.disableInteraction || mp.isHideInTrunk ||
            mp.pairAnims && mp.pairAnims.isPlayerInvolved(p);
    }
    function eligible(entity) {
        const p = mp.players.local;
        if (!valid(entity) || entity === p || entity.dimension !== p.dimension || entity.variable_invisible ||
            entity.getVariable('luckyWheelPrizeVehicle') || distance(p.position,entity.position) > 2.5) return false;
        if (entity.type === 'player') return !p.variable_attachedObject &&
            !(mp.pairAnims && mp.pairAnims.isPlayerInvolved(entity));
        if (entity.type === 'vehicle') {
            return !mp.game.vehicle.isThisModelABicycle(entity.model) && !p.getVehicleIsUsing() &&
                !['tanker','tanker2','trailers','trailers2','trailers4','rcbandito','qbmx','raketrailer','tractor2','combine']
                    .some(name => entity.model === mp.game.joaat(name));
        }
        return entity.type === 'object';
    }
    function ray() {
        const origin = mp.game.cam.getGameplayCoord(), r = mp.game.cam.getGameplayCamRot(2);
        const yaw=r.z*Math.PI/180,pitch=r.x*Math.PI/180;
        return { origin,direction:{x:-Math.sin(yaw)*Math.cos(pitch),y:Math.cos(yaw)*Math.cos(pitch),z:Math.sin(pitch)} };
    }
    function trace(a,b) {
        return mp.raycasting.testPointToPoint(new mp.Vector3(a.x,a.y,a.z),new mp.Vector3(b.x,b.y,b.z),mp.players.local.handle,31);
    }
    function score(point,view,kind) {
        const x=point.x-view.origin.x,y=point.y-view.origin.y,z=point.z-view.origin.z;
        const along=x*view.direction.x+y*view.direction.y+z*view.direction.z;
        if (along<=0) return null;
        const offset=Math.hypot(x-along*view.direction.x,y-along*view.direction.y,z-along*view.direction.z);
        const angle=(kind==='item'?4:3)*Math.PI/180;
        const radius=Math.min(kind==='item'?0.22:0.18,Math.max(0.06,along*Math.tan(angle)));
        return offset<=radius ? offset/radius+along*0.001 : null;
    }
    function visible(candidate,view) {
        const hit=trace(view.origin,candidate.point);
        return !hit || candidate.entity && hit.entity && hit.entity.handle===candidate.entity.handle ||
            hit.position && distance(hit.position,candidate.point)<=0.15;
    }
    function resolve(options = {}) {
        if (blocked()) { previous=null; return null; }
        const p=mp.players.local,view=ray(),candidates=[];
        const items=(options.getGroundItems || settings.getGroundItems)();
        if (!Array.isArray(items)) throw new TypeError('getGroundItems має повернути масив');
        for (const item of items) {
            if (!item || !['string','number'].includes(typeof item.id) || !item.position ||
                ![item.position.x,item.position.y,item.position.z].every(Number.isFinite) ||
                item.dimension!==p.dimension || distance(p.position,item.position)>2.5 || item.entity && !valid(item.entity)) continue;
            const value=score(item.position,view,'item');
            if (value!==null) candidates.push({kind:'item',item,entity:item.entity,point:item.position,score:value});
        }
        const end={x:view.origin.x+view.direction.x*15,y:view.origin.y+view.direction.y*15,z:view.origin.z+view.direction.z*15};
        const direct=trace(view.origin,end),entity=direct && direct.entity;
        const exactItem=candidates.find(c=>c.entity && entity && c.entity.handle===entity.handle);
        if (exactItem) { previous=identity(exactItem); return exactItem; }
        if (eligible(entity) && ['player','vehicle'].includes(entity.type)) {
            const target={kind:entity.type,entity}; previous=identity(target); return target;
        }
        const seen=new Set();
        function add(e) {
            if (!eligible(e) || seen.has(e)) return;
            seen.add(e);
            const point={x:e.position.x,y:e.position.y,z:e.position.z+(e.type==='player'?0.85:0)};
            const value=score(point,view,e.type);
            if (value!==null) candidates.push({kind:e.type,entity:e,point,score:value});
        }
        const original=attachment && attachment.ray===p.raycasting ? attachment.stock : p.raycasting && p.raycasting.entity;
        if (original) add(original);
        if (mp.players.forEachInStreamRange) mp.players.forEachInStreamRange(add);
        candidates.sort((a,b)=>a.score-b.score);
        const shortlist=candidates.slice(0,3).filter(candidate=>visible(candidate,view));
        let selected=shortlist[0] || null;
        if (selected && selected.kind!=='item') {
            const retained=shortlist.find(c=>c.kind!=='item' && identity(c)===previous && c.score<=selected.score+0.08);
            if (retained) selected=retained;
        }
        previous=selected ? identity(selected) : null;
        return selected;
    }
    function detach() {
        if (!attachment) return;
        const state=attachment;attachment=null;
        const descriptor=Object.getOwnPropertyDescriptor(state.ray,'entity');
        if (!descriptor || descriptor.get!==state.getter) return;
        Object.defineProperty(state.ray,'entity',{...state.descriptor,value:state.stock});
    }
    function attach() {
        const ray=mp.players.local.raycasting;
        if (!ray || attachment && attachment.ray===ray) return;
        detach();
        const descriptor=Object.getOwnPropertyDescriptor(ray,'entity');
        if (!descriptor || !descriptor.configurable || !('value' in descriptor))
            throw new Error('Поле raycasting.entity недоступне для підключення');
        const state={ray,descriptor,stock:descriptor.value,getter:null};
        state.getter=function(){
            if (!alive || !enabled) return state.stock;
            const target=resolve();
            return target && target.kind!=='item' ? target.entity : undefined;
        };
        attachment=state;
        Object.defineProperty(ray,'entity',{configurable:true,enumerable:descriptor.enumerable,
            get:state.getter,set(value){state.stock=value;}});
    }
    function publish(target) {
        const data=target ? {kind:target.kind,id:target.kind==='item'?target.item.id:target.entity.remoteId} : null;
        const signature=JSON.stringify(data);
        if (signature===lastSignature) return;
        lastSignature=signature;settings.onTargetChanged(data);
    }
    function render() {
        if (!alive) return;
        try {
            if (enabled) attach();
            const now=Date.now();
            if (now-lastUpdate>=80) {lastUpdate=now;publish(resolve());}
        } catch(error) {
            enabled=false;detach();
            if (mp.console && mp.console.logError) mp.console.logError('[Кружечок] '+error.message);
        }
    }
    const api=Object.freeze({
        resolve,
        configure(options) {
            if (!alive) throw new Error('Модуль вивантажено');
            for (const key of ['getGroundItems','onTargetChanged']) {
                if (options[key]!==undefined && typeof options[key]!=='function') throw new TypeError('Потрібна функція '+key);
            }
            settings={...settings,...options};previous=null;lastSignature='';
        },
        setEnabled(value) {
            if (typeof value!=='boolean') throw new TypeError('Потрібне логічне значення');
            enabled=value;previous=null;
            if (!enabled) {detach();publish(null);}
        },
        unload() {
            if (!alive) return;
            alive=false;detach();mp.events.remove('render',render);publish(null);
            if (root.QuantInteractionAim===api) delete root.QuantInteractionAim;
        }
    });
    root.QuantInteractionAim=api;
    mp.events.add('render',render);
})(typeof globalThis!=='undefined'?globalThis:global);
