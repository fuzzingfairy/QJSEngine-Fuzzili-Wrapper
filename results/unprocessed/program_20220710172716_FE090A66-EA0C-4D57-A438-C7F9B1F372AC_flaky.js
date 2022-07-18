function main() { 
const v4 = [-65537,-65537];
const v5 = {"apply":Object,"call":Object,"construct":Object,"defineProperty":Object,"deleteProperty":Object,"getOwnPropertyDescriptor":Object,"getPrototypeOf":Object,"has":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v7 = new Proxy(Object,v5);
with (Object) {
    __proto__ = v7;
    for (const v8 of v4) {
    }
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
