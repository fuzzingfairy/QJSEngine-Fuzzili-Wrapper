function main() { 
const v1 = [1,1,1];
v1[0] = v1;
const v3 = v1["join"]();
const v4 = [1,1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
