function main() { 
const v2 = {"defineProperty":Object,"deleteProperty":Object,"getPrototypeOf":Object,"isExtensible":Object,"ownKeys":Object,"set":Object,"setPrototypeOf":Object};
const v3 = new Proxy(Object,v2);
v2.__proto__ = v3;
for (const v4 of v3) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
