function main() { 
const v2 = Object();
const v3 = ["global"];
v3[6] = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
