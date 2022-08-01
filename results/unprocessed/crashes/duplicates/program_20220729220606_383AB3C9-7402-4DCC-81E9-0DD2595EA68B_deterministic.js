function main() { 
const v1 = [128];
function v2(v3,v4,v5,v6,v7) {
}
const v9 = {"call":v2,"construct":Symbol,"defineProperty":Symbol,"deleteProperty":v2,"has":v2,"isExtensible":v2,"ownKeys":Symbol,"preventExtensions":Symbol,"setPrototypeOf":Symbol};
const v11 = new Proxy(v1,v9);
v9.__proto__ = v11;
const v12 = v9[-9007199254740992];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
