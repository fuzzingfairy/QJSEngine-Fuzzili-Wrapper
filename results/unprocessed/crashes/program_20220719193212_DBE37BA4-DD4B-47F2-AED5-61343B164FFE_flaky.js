function main() { 
const v1 = [-268435456,-268435456];
v1[0] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
