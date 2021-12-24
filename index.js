class flyVar {
    constructor() {
        this.flyStorage = {};
        this.flyEffect = [];
        this.flySingle = [];
    }
    set(k, v) {
        this.flyStorage[k] = v;
        this.runAll();
        this.runSingle(k);
    }
    effect(callback, name) {
        let exist = false;
        for (let e of this.flyEffect) {
            if (e.name === name) {
                exist = true;
                if (typeof callback === 'function') {
                    e.callback = callback;
                }
            }

        }
        if (!exist && typeof callback === 'function')
            this.flyEffect.push({ callback: callback, name: name });
    }
    get(k) {
        if (this.flyStorage.hasOwnProperty(k))
            return this.flyStorage[k];
    }
    connect(k, callback, name) {
        let exist = false;
        for (let e of this.flySingle) {
            if (e.name === name) {
                exist = true;
                if (typeof callback === 'function') {
                    e.callback = callback;
                    e.key = k;
                }
            }
        }
        if (!exist && typeof callback === 'function')
            this.flySingle.push({ key: k, callback: callback, name: name });
    }
    runAll() {
        //run global
        for (let e of this.flyEffect) {
            e.callback();
        }
    }
    runSingle(k) {
        //run connected function
        for (let e of this.flySingle) {
            if (e.key === k) {
                e.callback();
            }
        }
    }
}

module.exports = flyVar;