function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = {"call":-136245.2117168511,"construct":v2,"defineProperty":-136245.2117168511,"deleteProperty":-136245.2117168511,"getOwnPropertyDescriptor":v1,"getPrototypeOf":v1,"has":v2,"preventExtensions":v1,"setPrototypeOf":v2};
const v5 = new Proxy(v1,v3);
v3.__proto__ = v5;
const v7 = v3["max"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
