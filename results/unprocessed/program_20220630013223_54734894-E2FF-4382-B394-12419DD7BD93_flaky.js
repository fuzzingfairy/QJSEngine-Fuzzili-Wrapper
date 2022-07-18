function main() { 
const v1 = [129];
v1[0] = v1;
const v3 = v1["toString"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
