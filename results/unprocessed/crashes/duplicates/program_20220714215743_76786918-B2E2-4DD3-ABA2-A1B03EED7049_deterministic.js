function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = Object();
v0.__proto__ = v1;
Object[v0] ^= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
