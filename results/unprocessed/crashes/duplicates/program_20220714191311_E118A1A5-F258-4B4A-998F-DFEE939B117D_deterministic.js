function main() { 
const v1 = [-9007199254740993,-9007199254740993,-9007199254740993,-9007199254740993,-9007199254740993];
v1[9] = v1;
const v2 = v1.toString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
