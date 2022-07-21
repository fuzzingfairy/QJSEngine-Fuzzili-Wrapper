function main() { 
const v1 = {};
const v3 = {"apply":Object,"call":Object,"construct":Error,"defineProperty":Object,"deleteProperty":Error,"isExtensible":Error,"ownKeys":Object,"preventExtensions":Error,"set":Error,"setPrototypeOf":Object};
const v5 = new Proxy(v1,v3);
v1.__proto__ = v5;
const v6 = v1.__proto__;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
