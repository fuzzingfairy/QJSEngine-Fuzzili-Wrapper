function main() { 
const v1 = Object();
const v3 = Object["getOwnPropertyDescriptor"]("getOwnPropertyDescriptor");
const v4 = {"call":Object,"construct":v3,"defineProperty":Object,"deleteProperty":Object,"get":v3,"getOwnPropertyDescriptor":Object,"getPrototypeOf":Object,"has":v3,"isExtensible":v3,"ownKeys":v3,"preventExtensions":v3,"set":v3,"setPrototypeOf":v3};
const v6 = new Proxy(v1,v4);
v6.__proto__ = v6;
const v8 = Symbol.unscopables;
const v9 = v6[v8];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
