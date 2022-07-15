function main() { 
const v1 = [-1000000.0];
v1[0] = v1;
const v3 = Object();
const v4 = delete v3[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
