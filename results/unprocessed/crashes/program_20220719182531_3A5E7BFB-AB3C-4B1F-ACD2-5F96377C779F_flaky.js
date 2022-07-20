function main() { 
const v1 = [-5.0];
v1[0] = v1;
const v3 = Object();
v3[v1] -= -5.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
