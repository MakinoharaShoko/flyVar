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
    effect(callback) {
        if (typeof callback === 'function')
            this.flyEffect.push(callback);
    }
    get(k) {
        if (this.flyStorage.hasOwnProperty(k))
            return this.flyStorage[k];
    }
    connect(k, callback) {
        this.flySingle.push({key:k,callback:callback});
    }
    runAll() {
        //run global
        for (let callback of this.flyEffect) {
            callback();
        }
    }
    runSingle(k) {
        //run connected function
        for(let e of this.flySingle){
            if(e.key === k){
                e.callback();
            }
        }
    }
}

module.exports = flyVar;