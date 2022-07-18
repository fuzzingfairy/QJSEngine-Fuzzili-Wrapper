function main() { 
const v1 = [2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
v1[4] = v1;
const v2 = {"apply":2.2250738585072014e-308,"call":2.2250738585072014e-308,"construct":2.2250738585072014e-308,"deleteProperty":v1,"getOwnPropertyDescriptor":v1,"has":v1,"isExtensible":v1,"ownKeys":v1,"preventExtensions":2.2250738585072014e-308,"set":2.2250738585072014e-308,"setPrototypeOf":v1};
const v4 = new Proxy(v1,v2);
const v5 = v4();
const v7 = [-1963087901,-1963087901,-1963087901,-1963087901,-1963087901];
const v8 = Object;
const v9 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
