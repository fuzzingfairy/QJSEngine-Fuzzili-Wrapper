function main() { 
const v1 = [1073741824];
v1[8] = v1;
const v2 = +v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
