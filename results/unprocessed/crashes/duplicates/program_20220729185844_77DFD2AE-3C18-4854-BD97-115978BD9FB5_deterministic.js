function main() { 
const v1 = [1073741824,1073741824,1073741824,1073741824,1073741824];
v1.length = 1073741824;
const v2 = v1.copyWithin();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
