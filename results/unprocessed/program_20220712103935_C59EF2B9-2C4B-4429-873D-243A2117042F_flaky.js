function main() { 
const v1 = [4294967296,4294967296];
v1[8] = v1;
v1[-9007199254740991] /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
