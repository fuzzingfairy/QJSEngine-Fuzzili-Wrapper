function main() { 
const v1 = [-1000000.0];
v1[0] = v1;
const v4 = Object();
const v5 = Object();
v5[v4] -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
