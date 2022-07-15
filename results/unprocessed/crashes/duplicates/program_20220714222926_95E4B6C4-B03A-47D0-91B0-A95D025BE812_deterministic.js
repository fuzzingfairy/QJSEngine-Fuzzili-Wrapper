function main() { 
const v0 = {};
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v4 = [v1];
v0[v4] <<= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
