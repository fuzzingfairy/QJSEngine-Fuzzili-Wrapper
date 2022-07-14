function main() { 
const v1 = Object();
const v2 = {"call":Object,"defineProperty":Object,"deleteProperty":Object,"ownKeys":Object,"set":Object};
const v4 = new Proxy(v1,v2);
v1.__proto__ = v4;
const v6 = delete Object[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
