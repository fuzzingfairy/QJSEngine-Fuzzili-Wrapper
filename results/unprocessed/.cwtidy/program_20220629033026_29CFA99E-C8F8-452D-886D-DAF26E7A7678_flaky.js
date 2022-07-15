function main() { 
const v1 = [4294967296,4294967296];
v1[7] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
