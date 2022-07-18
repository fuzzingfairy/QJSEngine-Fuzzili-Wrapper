function main() { 
const v1 = [9007199254740993,9007199254740993];
v1[3] = v1;
const v2 = Object;
const v3 = v1();
const v4 = [v3,9007199254740993];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
