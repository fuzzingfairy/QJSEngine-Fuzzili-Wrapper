function main() { 
const v1 = {};
const v2 = [v1];
const v3 = -1;
const v4 = {};
const v5 = [v4,v4];
const v6 = /\w/ym;
function v7(v8,v9) {
    const v11 = Object();
    return v8;
}
const v13 = Object();
Object.length = 0;
const v15 = +v13;
const v16 = v2.keys();
const v17 = class V17 {
    constructor(v19,v20) {
        const v22 = Object();
    }
    getUTCDate(v24,v25) {
        const v27 = Object();
    }
    abs(v29) {
        const v31 = Object();
    }
};
function v32(v33) {
    const v35 = v2["concat"]("concat",v33,"concat");
    const v37 = Object();
    const v39 = Object();
    const v41 = Object();
    const v42 = v4 >>> v41;
    const v43 = `
        const v44 = {"apply":Object,"call":eval,"construct":Object,"defineProperty":v7,"deleteProperty":v32,"get":Object,"getOwnPropertyDescriptor":v32,"getPrototypeOf":Object,"isExtensible":Object,"ownKeys":eval,"preventExtensions":eval};
        const v46 = new Proxy(v13,v44);
    `;
    const v47 = eval(v43);
}
v4.__proto__ = v5;
v5.length = 2;
const v50 = Object();
const v52 = Object();
const v54 = Symbol.search;
Object[v54] = v52;
for (let v58 = 0; v58 < 20; v58++) {
    const v59 = {"b":eval,"n":Symbol,"p":Object};
    const v60 = v32(v59);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
