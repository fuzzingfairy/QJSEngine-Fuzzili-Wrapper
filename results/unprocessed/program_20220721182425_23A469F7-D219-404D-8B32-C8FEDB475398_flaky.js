function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = {"apply":Object,"defineProperty":Object,"getOwnPropertyDescriptor":Object,"ownKeys":Object,"preventExtensions":Object};
const v5 = Math.atanh(v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
