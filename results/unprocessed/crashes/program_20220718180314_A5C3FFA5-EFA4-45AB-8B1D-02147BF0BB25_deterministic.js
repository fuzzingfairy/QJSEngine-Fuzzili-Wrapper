function main() { 
const v1 = [4.0,4.0,4.0];
const v2 = [v1];
v1[4] = v2;
const v3 = v2[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
