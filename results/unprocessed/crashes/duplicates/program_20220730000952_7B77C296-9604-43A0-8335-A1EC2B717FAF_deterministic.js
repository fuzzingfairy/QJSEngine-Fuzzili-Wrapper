function main() { 
const v0 = {};
const v1 = [v0];
const v3 = {};
const v4 = [v3];
const v6 = [-1024,-1024,-1024,-1024];
function v7(v8,v9,v10,v11) {
    return v0;
}
const v12 = v6.__proto__;
let v14 = Object();
const v16 = "iterator";
const v17 = v1 != v4;
const v18 = undefined;
const v20 = {"get":v7};
let v21 = Object.defineProperty(v14,0,v20);
function v22() {
    let v23 = Object;
    const v24 = v23();
    const v25 = [-2147483647,-2147483647,-2147483647,-2147483647,-2147483647];
    const v26 = Object;
    const v27 = {"call":v23,"defineProperty":v23,"deleteProperty":v22,"getOwnPropertyDescriptor":v7,"getPrototypeOf":v7,"setPrototypeOf":v7};
    const v28 = new Proxy(v25,v27);
    [v21,v14,v23] = v25;
    const v29 = Object;
}
const v30 = v22();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
