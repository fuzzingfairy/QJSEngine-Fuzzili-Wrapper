function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = v1;
v2[536870912] |= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
