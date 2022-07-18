function main() { 
const v1 = [9007199254740993];
const v2 = [v1,9007199254740993];
v1[7] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
