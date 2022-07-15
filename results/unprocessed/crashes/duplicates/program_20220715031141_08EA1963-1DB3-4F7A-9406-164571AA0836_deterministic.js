function main() { 
const v2 = [4096,1000.0];
v2[0] = v2;
const v3 = v2 in v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
