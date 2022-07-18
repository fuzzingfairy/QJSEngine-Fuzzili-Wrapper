function main() { 
const v0 = {};
const v1 = [v0];
v1[4] = v1;
const v3 = Object();
const v5 = Object();
const v6 = {"getOwnPropertyDescriptor":Object,"isExtensible":Object};
const v8 = new Proxy(v1,v6);
const v10 = Object();
const v11 = 6;
const v13 = Symbol.match;
const v14 = v8[v13];
const v17 = Object();
const v18 = v0[v0];
const v20 = Object();
v3.length = 0;
const v21 = "description";
const v22 = -2.0;
const v24 = Object();
const v25 = Object;
const v26 = delete Object[-1463222451];
const v29 = Object();
const v30 = [v8];
const v31 = Symbol.for;
const v32 = Reflect.apply(v31,v3,v30);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
