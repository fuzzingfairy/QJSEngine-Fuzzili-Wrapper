function main() { 
function v0(v1,...v2) {
}
const v4 = {"apply":Object,"call":Object,"construct":v0,"defineProperty":v0,"deleteProperty":v0,"getOwnPropertyDescriptor":v0,"getPrototypeOf":v0,"has":v0,"isExtensible":Object,"ownKeys":Object,"preventExtensions":v0,"set":Object,"setPrototypeOf":v0};
function v5(v6,v7) {
}
const v9 = new Promise(v5);
const v11 = [v9,v9,v9,v9];
const v12 = Promise.race;
const v13 = Reflect.apply(v12,v4,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
