function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = v1["includes"](v0,...v1,"includes");
const v7 = 3.0;
const v8 = {"deleteProperty":Object,"get":Object,"getPrototypeOf":Object,"has":Object,"isExtensible":Object,"ownKeys":Object,"preventExtensions":v3};
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
