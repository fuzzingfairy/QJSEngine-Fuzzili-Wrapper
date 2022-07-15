function main() { 
const v1 = Object();
const v3 = [-4.0,-4.0,-4.0,-4.0,-4.0];
v3[0] = v3;
v1.e |= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
