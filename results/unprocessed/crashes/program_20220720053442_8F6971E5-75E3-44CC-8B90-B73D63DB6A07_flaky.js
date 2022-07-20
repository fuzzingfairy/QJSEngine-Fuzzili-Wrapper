function main() { 
const v1 = [4294967295];
v1[-0.0] = v1;
const v3 = 4294967295 >= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
