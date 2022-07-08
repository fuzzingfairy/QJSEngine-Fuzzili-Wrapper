function main() { 
const v1 = [25505,25505,25505,25505];
const v2 = {};
v1[0] = v1;
const v3 = v1();
const v4 = [v2,v2,v2,v2,v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
