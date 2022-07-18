function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v2,v2];
v3[v3] |= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
