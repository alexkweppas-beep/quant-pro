(function (root) {
    'use strict';
    if (root.QuantMouseBinds) root.QuantMouseBinds.unload();
    const buttons = { 3:5, 4:6 }, labels = { 5:'Mouse4', 6:'Mouse5' };
    if (typeof document !== 'undefined') {
        let menu=null, originalSetState=null, wrapper=null, previous='', alive=true;
        function selection() {
            const selected=menu && menu.state && menu.state.showKeyboard;
            return selected && typeof selected.name==='string' && (Number.isInteger(selected.key) || selected.key===false) ? selected : null;
        }
        function sync() {
            if (!alive) return;
            const selected=selection(),signature=selected?selected.name+':'+selected.key:'';
            if (signature===previous) return;
            previous=signature;
            if (selected) mp.trigger('quantMouseBinds:begin',selected.name,selected.key);
            else mp.trigger('quantMouseBinds:cancel');
        }
        function down(event) {
            const code=buttons[event.button],selected=selection();
            if (!code || !selected) return;
            event.preventDefault();event.stopImmediatePropagation();
            mp.trigger('quantMouseBinds:assign',code);
        }
        function up(event) {
            const code=buttons[event.button];
            if (code) mp.trigger('quantMouseBinds:release',code);
        }
        function blur() {mp.trigger('quantMouseBinds:release',5);mp.trigger('quantMouseBinds:release',6);}
        const api=Object.freeze({
            installCef(component) {
                if (!alive || menu) throw new Error('Модуль CEF уже підключено або вивантажено');
                if (!component || typeof component.setState!=='function') throw new TypeError('Потрібен компонент налаштувань Quant');
                menu=component;originalSetState=menu.setState;
                wrapper=function(update,callback){
                    return originalSetState.call(this,update,function(){sync();if(callback)callback.call(this);});
                };
                menu.setState=wrapper;
                if (Array.isArray(menu.svgToControl)) for (const code of [5,6]) {
                    if (!menu.svgToControl.some(control=>control.key===code)) menu.svgToControl.push({key:code,label:labels[code]});
                }
                document.addEventListener('mousedown',down,true);document.addEventListener('mouseup',up,true);
                root.addEventListener('blur',blur);sync();
            },
            finishCapture() {if(menu && selection())menu.setState({showKeyboard:false});},
            unload() {
                if(!alive)return;alive=false;
                document.removeEventListener('mousedown',down,true);document.removeEventListener('mouseup',up,true);
                root.removeEventListener('blur',blur);
                if(menu && menu.setState===wrapper)menu.setState=originalSetState;
                blur();mp.trigger('quantMouseBinds:cancel');menu=null;
                if(root.QuantMouseBinds===api)delete root.QuantMouseBinds;
            }
        });
        root.QuantMouseBinds=api;return;
    }
    let alive=true,browser=null,pending=null;
    const captured=new Set(),records=new Map(),bindings=[],timers=new Set();
    function report(error){if(mp.console && mp.console.logError)mp.console.logError('[Бінди миші] '+error.message);}
    function refresh(){
        for(const entry of mp.keys.data || []) {
            if(![5,6].includes(entry.key) || records.has(entry) || typeof entry.handler!=='function')continue;
            const original=entry.handler;
            const wrapper=function(...args){if(pending || captured.has(entry.key))return;return original.apply(this,args);};
            mp.keys.unbind(entry.key,entry.toggle,original);entry.handler=wrapper;
            mp.keys.bind(entry.key,entry.toggle,wrapper);records.set(entry,{original,wrapper});
        }
    }
    function begin(name,oldKey){
        const exists=(mp.keys.data || []).some(entry=>entry.name===name && entry.key===oldKey);
        pending=exists && browser ? {name,oldKey} : null;
        refresh();
    }
    function cancel(){pending=null;}
    function assign(code){
        if(!alive || !pending || ![5,6].includes(code))return;
        const selected=pending;
        if(!(mp.keys.data || []).some(entry=>entry.name===selected.name && entry.key===selected.oldKey)){cancel();return;}
        captured.add(code);pending=null;
        try {
            mp.events.call('updateBind',selected.name,selected.oldKey,code,labels[code]);refresh();
            browser.execute('if(globalThis.QuantMouseBinds)globalThis.QuantMouseBinds.finishCapture();');
        }catch(error){report(error);}
    }
    function release(code){
        if(![5,6].includes(code))return;
        const timer=setTimeout(()=>{timers.delete(timer);captured.delete(code);},0);timers.add(timer);
    }
    function render(){if(alive)refresh();}
    const api=Object.freeze({
        attachBrowser(value){
            if(!alive)throw new Error('Модуль вивантажено');
            if(!value || typeof value.execute!=='function')throw new TypeError('Потрібен штатний browserMenu');
            browser=value;
        },
        getButtonLabel(code){return labels[code] || null;},
        unload(){
            if(!alive)return;alive=false;pending=null;
            for(const [entry,state]of records){
                if(entry.handler!==state.wrapper)continue;
                mp.keys.unbind(entry.key,entry.toggle,state.wrapper);entry.handler=state.original;
                mp.keys.bind(entry.key,entry.toggle,state.original);
            }
            for(const [code,down,handler]of bindings)mp.keys.unbind(code,down,handler);
            for(const timer of timers)clearTimeout(timer);
            for(const [name,handler]of eventHandlers)mp.events.remove(name,handler);
            records.clear();captured.clear();timers.clear();browser=null;
            if(root.QuantMouseBinds===api)delete root.QuantMouseBinds;
        }
    });
    const eventHandlers=[['quantMouseBinds:begin',begin],['quantMouseBinds:cancel',cancel],
        ['quantMouseBinds:assign',assign],['quantMouseBinds:release',release],['updateBind',refresh],['render',render]];
    root.QuantMouseBinds=api;
    for(const [name,handler]of eventHandlers)mp.events.add(name,handler);
    refresh();
    for(const code of [5,6]) {
        const down=()=>assign(code),up=()=>release(code);
        mp.keys.bind(code,true,down);mp.keys.bind(code,false,up);
        bindings.push([code,true,down],[code,false,up]);
    }
})(typeof globalThis!=='undefined'?globalThis:global);
