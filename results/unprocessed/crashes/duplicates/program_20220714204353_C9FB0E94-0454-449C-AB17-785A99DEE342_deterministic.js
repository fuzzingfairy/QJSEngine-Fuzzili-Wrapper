function main() { 
const v2 = ["64",3.0,3.0,3.0];
v2[8] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
