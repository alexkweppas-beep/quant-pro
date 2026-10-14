(function (root) {
    'use strict';
    if (root.QuantTyreSpeed) root.QuantTyreSpeed.unload();
    const wheelIds = [0, 1, 2, 3, 4, 5, 45, 47];
    const factors = [1, 0.75, 0.55, 0.4, 0.3];
    let alive = true, enabled = true, active = null, lastScan = -Infinity;

    function valid(vehicle) {
        return !!vehicle && mp.vehicles.exists(vehicle) && !!vehicle.handle;
    }
    function driver(vehicle) {
        return valid(vehicle) && vehicle.getPedInSeat(-1) === mp.players.local.handle;
    }
    function factor(count) {
        return factors[Math.min(count, factors.length - 1)];
    }
    function detach() {
        if (!active) return;
        const state = active;
        active = null;
        if (state.vehicle.setMaxSpeed !== state.wrapper) return;
        if (state.descriptor) Object.defineProperty(state.vehicle, 'setMaxSpeed', state.descriptor);
        else delete state.vehicle.setMaxSpeed;
        if (valid(state.vehicle) && state.vehicle.handle === state.handle) {
            state.original.call(state.vehicle, state.base === undefined ? 0 : state.base);
        }
    }
    function attach(vehicle) {
        const state = { vehicle, handle: vehicle.handle, count: 0, base: undefined,
            original: vehicle.setMaxSpeed, descriptor: Object.getOwnPropertyDescriptor(vehicle, 'setMaxSpeed') };
        if (typeof state.original !== 'function') throw new Error('Немає штатного setMaxSpeed');
        state.wrapper = function (requested) {
            if (!Number.isFinite(requested)) return state.original.call(this, requested);
            state.base = requested;
            let limit = requested;
            if (alive && enabled && state.count > 0 && this === state.vehicle && driver(this)) {
                const baseline = requested > 0 ? requested : this.getEstimatedMaxSpeed();
                if (Number.isFinite(baseline) && baseline > 0) {
                    limit = Math.min(baseline, Math.max(5 / 3.6, baseline * factor(state.count)));
                }
            }
            return state.original.call(this, limit);
        };
        Object.defineProperty(vehicle, 'setMaxSpeed', { value: state.wrapper, writable: true, configurable: true });
        active = state;
        lastScan = -Infinity;
    }
    function scan(state) {
        state.count = wheelIds.filter(id => state.vehicle.isTyreBurst(id, false)).length;
    }
    function render() {
        if (!alive) return;
        try {
            const vehicle = mp.players.local.vehicle;
            if (!enabled || !driver(vehicle) || [13, 14, 15, 16, 21].includes(vehicle.getClass())) {
                detach(); return;
            }
            if (active && (active.vehicle !== vehicle || active.handle !== vehicle.handle)) detach();
            if (!active) attach(vehicle);
            if (vehicle.setMaxSpeed !== active.wrapper) {
                active = null;
                throw new Error('Інший модуль замінив setMaxSpeed; модуль шин вимкнено');
            }
            const now = Date.now();
            if (now - lastScan >= 100) { scan(active); lastScan = now; }
            if (active.base !== undefined) active.wrapper.call(vehicle, active.base);
        } catch (error) {
            enabled = false;
            detach();
            if (mp.console && mp.console.logError) mp.console.logError('[Шини] ' + error.message);
        }
    }
    const api = Object.freeze({
        setEnabled(value) {
            if (typeof value !== 'boolean') throw new TypeError('Потрібне логічне значення');
            enabled = value;
            if (!enabled) detach();
        },
        getStatus() {
            return { enabled, vehicleId: active ? active.vehicle.remoteId : null,
                burstTyres: active ? active.count : 0, speedFactor: active ? factor(active.count) : 1 };
        },
        unload() {
            if (!alive) return;
            alive = false; detach();
            mp.events.remove('render', render);
            mp.events.remove('playerLeaveVehicle', leave);
            mp.events.remove('quantTyreSpeed:unload', unload);
            if (root.QuantTyreSpeed === api) delete root.QuantTyreSpeed;
        }
    });
    function leave() { detach(); }
    function unload() { api.unload(); }
    root.QuantTyreSpeed = api;
    mp.events.add('render', render);
    mp.events.add('playerLeaveVehicle', leave);
    mp.events.add('quantTyreSpeed:unload', unload);
})(typeof globalThis !== 'undefined' ? globalThis : global);
