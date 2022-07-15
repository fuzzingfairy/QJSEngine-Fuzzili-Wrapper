function main() { 
function v0(v1,v2) {
}
const v5 = Object();
const v8 = Object();
const v9 = {"apply":v0,"call":Object,"defineProperty":Object,"get":Object,"getPrototypeOf":Object,"has":Object,"ownKeys":Object,"preventExtensions":v0,"setPrototypeOf":Object};
const v11 = new Proxy(v8,v9);
const v12 = Object();
const v14 = [Object,v5,v5,v11];
const v15 = Promise.all;
const v16 = Reflect.apply(v15,v12,v14);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
