function main() { 
const v1 = [-1.0,-1.0,-1.0,-1.0,-1.0];
const v2 = {};
const v3 = [v2,v2,v2];
const v5 = Object();
v2.__proto__ = v3;
let v6 = Object;
const v7 = v6();
const v11 = v2 | 318439452;
const v13 = Object();
const v14 = Object();
v6 ^= 318439452;
const v15 = {};
const v16 = [v15,v15];
const v18 = Object();
const v19 = {"apply":Array,"call":Object,"defineProperty":Object,"deleteProperty":Object,"get":Object,"has":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v21 = new Proxy(Array,v19);
const v23 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
