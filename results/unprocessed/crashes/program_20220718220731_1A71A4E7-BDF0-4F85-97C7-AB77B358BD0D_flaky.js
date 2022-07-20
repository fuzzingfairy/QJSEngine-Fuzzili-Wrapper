function main() { 
const v1 = {};
const v2 = [v1];
v2[4] = v2;
const v3 = "PI"[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
