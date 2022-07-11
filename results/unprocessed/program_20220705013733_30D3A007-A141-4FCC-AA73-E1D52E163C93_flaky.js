function main() { 
const v1 = [-2.0];
const v2 = [-2.0,-2.0];
const v3 = {};
v2[9] = v2;
const v5 = Object();
v5[v2] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
