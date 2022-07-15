function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v1.valueOf = v1;
v0.__proto__ = v1;
const v3 = Object();
const v5 = Object();
v5[v3] %= v0;
const v7 = Object();
const v8 = class V8 {
    constructor(v10,v11,v12) {
        const v14 = v7.isInteger();
        const v15 = Object();
    }
    seal(v17,v18,v19) {
    }
    localeCompare(v21) {
        const v22 = Object;
        const v24 = Object();
    }
    defineProperties(v26,v27,v28) {
        const v30 = Object();
    }
};
const v32 = [1000.0,1000.0,1000.0];
const v33 = [1000.0,1000.0,1000.0,1000.0];
const v34 = Object;
const v35 = {"get":Object,"set":Object};
const v37 = Object();
const v39 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
