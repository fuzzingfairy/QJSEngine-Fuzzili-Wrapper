function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
Object.__proto__ = v1;
v0.__proto__ = Object;
const v4 = Object();
Object[v1] ^= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
