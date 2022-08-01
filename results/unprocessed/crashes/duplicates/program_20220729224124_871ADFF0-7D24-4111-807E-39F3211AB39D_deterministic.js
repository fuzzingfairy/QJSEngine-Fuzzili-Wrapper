function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
v1[v2] = 2.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
