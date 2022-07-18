function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = v0[v0];
const v3 = v2(v0,v2,v0,v1);
const v4 = {"call":v2,"get":v2,"getOwnPropertyDescriptor":v3,"getPrototypeOf":v2,"ownKeys":v2};
const v6 = Proxy(v2,v4);
const v8 = -841656.3890205994;
const v9 = delete v1[-1];
const v10 = v4.toUpperCase(9,...v1,...v1,v9);
const v11 = 18419;
const v13 = Object();
const v15 = Symbol.isConcatSpreadable;
const v16 = v0[v15];
const v18 = Int32Array(v1);
const v19 = [v18];
const v22 = Object();
const v24 = Object();
const v25 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
