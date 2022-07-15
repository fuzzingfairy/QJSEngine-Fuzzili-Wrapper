function main() { 
const v2 = [8,8];
const v3 = [-1.0,-1.0,-1.0];
v2[6] = v3;
v3[0] = v2;
const v5 = v3["flatMap"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
