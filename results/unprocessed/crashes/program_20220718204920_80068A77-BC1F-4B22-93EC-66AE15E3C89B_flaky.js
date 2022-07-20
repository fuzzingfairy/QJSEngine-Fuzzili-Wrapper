function main() { 
const v1 = [843260.5475703969];
v1[3] = v1;
const v2 = {};
v2[10000] /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
