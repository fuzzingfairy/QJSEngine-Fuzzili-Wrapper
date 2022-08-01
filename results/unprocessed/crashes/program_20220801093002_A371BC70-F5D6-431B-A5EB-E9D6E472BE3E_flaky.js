function main() { 
const v1 = {};
const v2 = [v1];
const v3 = 1540795104 % v2;
v1.__proto__ = v2;
const v5 = Math.imul(v3,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
