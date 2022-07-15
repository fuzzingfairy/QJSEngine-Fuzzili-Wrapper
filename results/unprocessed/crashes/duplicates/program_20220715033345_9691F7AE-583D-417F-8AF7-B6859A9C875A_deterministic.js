function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = -1073741824 & v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
