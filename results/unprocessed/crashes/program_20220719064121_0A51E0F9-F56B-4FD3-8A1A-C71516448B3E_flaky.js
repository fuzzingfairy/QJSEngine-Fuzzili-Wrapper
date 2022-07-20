function main() { 
const v1 = [-1,-1,-1,-1];
v1[2] = v1;
const v3 = Object();
const v4 = Object;
const v5 = v1 < v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
