function main() { 
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0,-1000.0];
const v2 = delete v1[-1000.0];
const v3 = {"apply":v2,"call":v1,"construct":v1,"defineProperty":-1000.0,"deleteProperty":-1000.0,"getPrototypeOf":v1,"has":-1000.0,"isExtensible":v1,"ownKeys":-1000.0,"set":-1000.0,"setPrototypeOf":v2};
const v5 = new Proxy(v1,v3);
v1.__proto__ = v5;
[] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
