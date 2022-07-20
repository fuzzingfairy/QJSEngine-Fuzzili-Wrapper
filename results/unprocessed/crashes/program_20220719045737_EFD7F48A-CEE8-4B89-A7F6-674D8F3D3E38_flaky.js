function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = {"apply":Object,"call":Object,"construct":Object,"defineProperty":Object,"deleteProperty":Object,"get":Object,"getOwnPropertyDescriptor":Object,"has":Object,"isExtensible":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v5 = new Proxy(Object,v3);
const v6 = v0.asIntN(Object,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
