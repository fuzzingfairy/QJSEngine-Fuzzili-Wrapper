function main() { 
const v1 = [-1.0,-1.0,-1.0];
v1[7] = v1;
const v3 = v1["flat"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: