function main() { 
function v1(v2,v3) {
}
const v5 = {"apply":v1,"construct":v1,"deleteProperty":v1,"get":v1,"getPrototypeOf":v1,"has":v1,"isExtensible":v1,"ownKeys":v1,"preventExtensions":v1,"set":v1,"setPrototypeOf":v1};
const v7 = [0];
const v8 = Promise.resolve;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
