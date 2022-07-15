function main() { 
let v0 = Number;
const v1 = {};
function* v2(v3,v4) {
    const v6 = [v1,v4,..."buffer",..."buffer",v1,v2,v1,v1,v4,v4];
    yield* v4;
    return v4;
}
const v7 = [v1];
const v8 = 4.0;
let v9 = {};
let v10 = [v9,v9,v9,v9,v9];
v7.valueOf = v2;
v1.__proto__ = v7;
let v11 = {};
const v12 = [v7,v11,v11];
const v14 = v1();
const v15 = {"apply":Object,"call":Object,"defineProperty":v0,"deleteProperty":v0,"get":Object,"getOwnPropertyDescriptor":v0,"getPrototypeOf":v0,"has":Object,"ownKeys":v0,"preventExtensions":v0,"setPrototypeOf":Object};
let v17 = new Proxy(v14,v15);
({"__proto__":v9,"constructor":v17,"deleteProperty":v17,"length":v11,"message":v0,"prototype":v10,} = v12);
const v18 = Object(v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
