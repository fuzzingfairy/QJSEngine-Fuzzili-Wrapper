function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
function v3(v4,v5,v6,v7) {
}
const v8 = {"apply":TypeError,"defineProperty":v3,"get":v3,"getPrototypeOf":v3,"isExtensible":TypeError,"ownKeys":TypeError,"preventExtensions":TypeError,"set":v3,"setPrototypeOf":v3};
const v10 = new Proxy(v1,v8);
const v13 = [v10];
const v14 = Promise.reject;
const v15 = Reflect.apply(v14,v0,v13);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
