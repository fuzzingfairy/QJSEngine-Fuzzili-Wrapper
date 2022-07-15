function main() { 
const v1 = [5.0,5.0];
v1[7] = v1;
const v3 = v1["join"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
