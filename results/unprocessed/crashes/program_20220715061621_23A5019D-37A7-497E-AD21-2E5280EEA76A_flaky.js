function main() { 
const v1 = [-65536,-65536];
v1[6] = v1;
const v2 = "-9007199254740991";
const v3 = v1 & -65536;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
