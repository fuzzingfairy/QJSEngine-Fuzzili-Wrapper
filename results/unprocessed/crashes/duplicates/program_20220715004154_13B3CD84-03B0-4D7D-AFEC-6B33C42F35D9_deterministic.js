function main() { 
const v1 = [-268435456];
v1[8] = v1;
const v3 = v1 == 2.2250738585072014e-308;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
