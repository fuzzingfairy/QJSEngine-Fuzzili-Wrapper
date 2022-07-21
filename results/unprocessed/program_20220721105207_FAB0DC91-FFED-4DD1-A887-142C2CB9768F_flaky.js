function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v0 / v0;
const v3 = {"apply":v1,"call":v1,"construct":v0,"defineProperty":v0,"deleteProperty":v2,"get":v0,"getOwnPropertyDescriptor":v1,"getPrototypeOf":v1,"has":v1,"isExtensible":v1,"preventExtensions":v1,"set":v2,"setPrototypeOf":v0};
const v5 = new Proxy(v1,v3);
const v6 = "string";
const v7 = {};
const v8 = [v7,v7,v7];
const v9 = Float32Array;
const v11 = Object();
let v12 = 0;
function v13(v14,v15) {
    const v17 = Object();
    return v15;
}
v0.length = 2;
const v21 = {"get":Object,"set":Object};
const v22 = Object.defineProperty(Object,16,v21);
let v23 = Object();
v23[Object] = v8;
v23 = v23;
const v25 = Object();
while (v12 < 7) {
    const v28 = Object();
    const v29 = v12++;
}
const v30 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
