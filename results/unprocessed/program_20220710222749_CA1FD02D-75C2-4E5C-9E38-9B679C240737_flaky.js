function main() { 
const v1 = {};
const v2 = {"apply":Object,"construct":Object,"deleteProperty":Object,"getPrototypeOf":Object};
const v4 = new Proxy(v1,v2);
const v6 = Object.setPrototypeOf(v2,v4);
const v8 = Object % v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
