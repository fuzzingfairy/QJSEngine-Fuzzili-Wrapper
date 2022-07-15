function main() { 
const v1 = Object();
const v3 = Object();
const v5 = Object();
const v6 = {"apply":Object,"construct":Object,"deleteProperty":Object,"get":Object,"has":Object,"setPrototypeOf":Object};
const v8 = new Proxy(v1,v6);
const v11 = [Object,v6,v8,v3];
const v12 = Promise.race;
const v13 = Reflect.apply(v12,v5,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
