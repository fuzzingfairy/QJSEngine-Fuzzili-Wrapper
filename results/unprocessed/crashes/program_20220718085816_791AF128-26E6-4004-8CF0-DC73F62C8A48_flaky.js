function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[9] = v1;
const v2 = {};
const v3 = [v2];
const v5 = v1();
const v6 = {"call":Object,"construct":Object,"valueOf":Object,"getOwnPropertyDescriptor":Object,"getPrototypeOf":Object,"isExtensible":Object,"preventExtensions":Object,"setPrototypeOf":Object};
const v8 = new Proxy(Object);
const v9 = v8();
const v10 = Object;
function v11(v12) {
}
const v13 = Promise;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
