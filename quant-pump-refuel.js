(function (root) {
    'use strict';
    if (root.QuantPumpRefuel) root.QuantPumpRefuel.unload();
    const records = new Map();
    let alive = true, settings = null, target = null, pending = false, timeout = null;
    let markerPositions = [], lastScan = -Infinity, lastSignature = '';
    let resumeLegacy = null;
    const originalDraw = mp.game.graphics.drawMarker;
    function samePosition(x,y,z,p,type) {
        return Math.abs(x-p.x)<0.02 && Math.abs(y-p.y)<0.02 &&
            Math.abs(z-(p.z+(type===43?-0.8:0.1)))<0.02;
    }
    function drawMarker(...args) {
        const type = args[0];
        if (settings && [43,22].includes(type) && markerPositions.some(p=>samePosition(args[1],args[2],args[3],p,type))) return;
        return originalDraw.apply(this,args);
    }
    function validDriver() {
        const p=mp.players.local,v=p.vehicle;
        return v && mp.vehicles.exists(v) && v.handle && v.getPedInSeat(-1)===p.handle &&
            ![13,14,15,16,21].includes(v.getClass()) ? v : null;
    }
    function select() {
        if (!alive || !settings || mp.bindBlocker()) return null;
        const v=validDriver();
        if (!v || v.getSpeed()>=1) return null;
        const pumps=settings.getPumps();
        if (!Array.isArray(pumps)) throw new TypeError('getPumps має повернути масив');
        let nearest=null,best=Infinity;
        for (const pump of pumps) {
            if (!pump || !Number.isInteger(pump.id) || !Number.isInteger(pump.idx) ||
                pump.id<0 || pump.idx<0 || !pump.position || pump.dimension!==mp.players.local.dimension) continue;
            const p=pump.position;
            if (![p.x,p.y,p.z].every(Number.isFinite)) continue;
            const d=Math.hypot(v.position.x-p.x,v.position.y-p.y);
            if (d>settings.radius || Math.abs(v.position.z-p.z)>2.5 || d>=best) continue;
            if (settings.canUsePump && !settings.canUsePump(pump,v)) continue;
            nearest=pump;best=d;
        }
        return nearest;
    }
    function publish(pump) {
        const data=pump?{id:pump.id,idx:pump.idx}:null;
        const signature=JSON.stringify(data);
        if (signature===lastSignature) return;
        lastSignature=signature;target=pump;
        settings.onAvailabilityChanged(data);
    }
    function finish() {
        pending=false;
        if (timeout!==null) clearTimeout(timeout);
        timeout=null;
    }
    function report(error) {
        if (mp.console && mp.console.logError) mp.console.logError('[Заправка] '+error.message);
    }
    function use() {
        if (pending || !settings) return;
        try {
            const pump=select();
            if (!pump) return;
            publish(pump);pending=true;
            timeout=setTimeout(()=>{finish();report(new Error('Немає відповіді заправки'));},10000);
            const request=settings.requestRefuel(pump.idx,pump.id);
            if (request && typeof request.then==='function') request.catch(error=>{finish();report(error);});
            else if (request===false) finish();
        } catch(error) {finish();report(error);}
    }
    function refreshBindings() {
        for (const entry of mp.keys.data || []) {
            if (records.has(entry) || entry.name!=='Клавіша дії' || typeof entry.handler!=='function' ||
                !Function.prototype.toString.call(entry.handler).includes('tryToRefuelVehicle')) continue;
            const original=entry.handler;
            mp.keys.unbind(entry.key,entry.toggle,original);
            entry.handler=use;mp.keys.bind(entry.key,entry.toggle,use);
            records.set(entry,original);
        }
    }
    function render() {
        if (!alive || !settings) return;
        try {
            refreshBindings();
            const now=Date.now();
            if (now-lastScan<150) return;
            lastScan=now;
            const selected=select();
            if (target && (!selected || target.id!==selected.id || target.idx!==selected.idx)) { settings.leaveRefuel(); finish(); }
            publish(selected);
        } catch(error) {report(error);}
    }
    function points(data) {
        markerPositions = [];
        if (!Array.isArray(data)) return;
        for (const station of data) if (Array.isArray(station)) for (const point of station) {
            if (point && point.position) markerPositions.push({...point.position});
        }
    }
    function opened(data) { if (data!==undefined) finish(); }
    const api=Object.freeze({
        install(options) {
            if (!alive) throw new Error('Модуль вивантажено');
            if (settings) throw new Error('Модуль уже підключено');
            for (const key of ['getPumps','requestRefuel','leaveRefuel','onAvailabilityChanged','suspendLegacy'])
                if (!options || typeof options[key]!=='function') throw new TypeError('Потрібна функція '+key);
            const radius=options.radius===undefined?4:options.radius;
            if (!Number.isFinite(radius) || radius<1 || radius>6) throw new RangeError('Радіус: 1–6 м');
            if (mp.game.graphics.drawMarker!==originalDraw && mp.game.graphics.drawMarker!==drawMarker)
                throw new Error('Інший модуль змінив drawMarker');
            const restore=options.suspendLegacy();
            if (typeof restore!=='function') throw new TypeError('suspendLegacy має повернути функцію відновлення');
            resumeLegacy=restore;
            settings={...options,radius};lastSignature='';refreshBindings();
            if (mp.game.graphics.drawMarker===originalDraw) mp.game.graphics.drawMarker=drawMarker;
            else if (mp.game.graphics.drawMarker!==drawMarker) throw new Error('Інший модуль змінив drawMarker');
        },
        setLegacyMarkerPositions(positions) {
            if (!Array.isArray(positions) || positions.some(p=>!p || ![p.x,p.y,p.z].every(Number.isFinite)))
                throw new TypeError('Потрібен масив позицій старих маркерів');
            markerPositions=positions.map(p=>({...p}));
        },
        getAvailablePump() {const pump=select();return pump?{id:pump.id,idx:pump.idx}:null;},
        use,
        unload() {
            if (!alive) return;
            alive=false;finish();
            for (const [entry,original] of records) {
                if (entry.handler!==use) continue;
                mp.keys.unbind(entry.key,entry.toggle,use);entry.handler=original;
                mp.keys.bind(entry.key,entry.toggle,original);
            }
            records.clear();
            if (mp.game.graphics.drawMarker===drawMarker) mp.game.graphics.drawMarker=originalDraw;
            mp.events.remove('render',render);mp.events.remove('createRefuelPoints',points);mp.events.remove('openRefuel',opened);
            if (settings) settings.onAvailabilityChanged(null);
            if (resumeLegacy) resumeLegacy();
            resumeLegacy=null;
            settings=null;target=null;
            if (root.QuantPumpRefuel===api) delete root.QuantPumpRefuel;
        }
    });
    root.QuantPumpRefuel=api;
    mp.events.add('render',render);mp.events.add('createRefuelPoints',points);mp.events.add('openRefuel',opened);
})(typeof globalThis!=='undefined'?globalThis:global);
