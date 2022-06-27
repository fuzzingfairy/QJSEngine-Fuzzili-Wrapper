function main() { 
const v1 = [-1.0,-1.0,-1.0];
v1[9] = v1;
v1[v1] = -1.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
