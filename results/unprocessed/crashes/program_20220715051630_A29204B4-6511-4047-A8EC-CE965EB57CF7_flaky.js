function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
v2[v2] = 228353.27051269473;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
