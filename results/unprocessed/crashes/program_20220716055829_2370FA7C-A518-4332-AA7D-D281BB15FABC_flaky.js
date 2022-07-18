function main() { 
const v1 = {"deleteProperty":Object,"getOwnPropertyDescriptor":Object,"has":Object,"setPrototypeOf":Object};
const v3 = new Proxy(Object,v1);
Object.__proto__ = v3;
Object.toString = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
