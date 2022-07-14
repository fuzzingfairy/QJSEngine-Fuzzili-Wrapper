function main() { 
const v1 = Object();
const v3 = [9,9];
v3[1] = v3;
v1.__proto__ += v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
