function main() { 
const v1 = {};
const v2 = [v1,268435456];
v1.__proto__ = v2;
const v4 = v2 == 3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
