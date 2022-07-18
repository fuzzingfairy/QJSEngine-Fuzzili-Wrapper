function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3,v3,v3];
v3.__proto__ = v4;
const v6 = v4();
const v8 = Object();
const v10 = Object();
const v15 = Object();
v15[v8] **= v2;
const v16 = [];
const v18 = Object();
const v19 = Object(1000000.0,-3054966562,v4,1000000.0);
const v21 = Object();
const v22 = {"call":Object,"construct":Object,"defineProperty":Object,"deleteProperty":Object,"get":Object,"getOwnPropertyDescriptor":Object,"getPrototypeOf":Object,"has":Object,"ownKeys":Object,"set":Object,"setPrototypeOf":Object};
const v23 = new Proxy(v18,v22);
const v24 = [Proxy];
const v25 = -1.7976931348623157e+308;
const v26 = "256";
const v27 = Object;
const v29 = Object();
const v30 = "1";
const v31 = Object;
v29[1000000.0] &= Object;
const v32 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
