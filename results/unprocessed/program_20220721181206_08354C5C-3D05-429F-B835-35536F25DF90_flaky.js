function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v0,v2,v2,v2];
const v4 = delete v1[v3];
const v5 = 1035525747;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
