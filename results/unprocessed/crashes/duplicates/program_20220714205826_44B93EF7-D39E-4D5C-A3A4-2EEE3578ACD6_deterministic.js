function main() { 
const v1 = [257,257];
v1[9] = v1;
const v3 = v1["flat"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
