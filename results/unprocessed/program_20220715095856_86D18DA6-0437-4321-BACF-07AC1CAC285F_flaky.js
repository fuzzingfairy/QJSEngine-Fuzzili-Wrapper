function main() { 
const v1 = [-4294967296];
v1[5] = v1;
const v2 = Object;
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
