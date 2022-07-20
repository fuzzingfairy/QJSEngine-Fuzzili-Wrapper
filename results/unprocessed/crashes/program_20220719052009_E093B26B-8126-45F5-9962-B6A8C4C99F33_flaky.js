function main() { 
const v1 = Object();
const v2 = {};
const v3 = [v2,v2,v2];
v2.__proto__ = v3;
this[v2] &= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
