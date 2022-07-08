function main() { 
const v2 = Object();
const v3 = {"apply":Object,"call":Object,"defineProperty":Object,"getOwnPropertyDescriptor":Object,"isExtensible":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v5 = new Proxy(v2,v3);
v3.__proto__ = v5;
const v6 = Int32Array in v5;
const v8 = Object();
const v9 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
