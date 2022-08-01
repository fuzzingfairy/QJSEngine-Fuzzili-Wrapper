function main() { 
const v2 = [2,2,2,2];
const v3 = [1.0,1.0,1.0,1.0];
v3[9] = v3;
v2[v3] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
