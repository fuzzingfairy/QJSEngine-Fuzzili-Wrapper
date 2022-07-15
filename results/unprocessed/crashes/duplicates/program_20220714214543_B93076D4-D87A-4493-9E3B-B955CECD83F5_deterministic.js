function main() { 
const v1 = [1225564941,1225564941,1225564941];
v1[2] = v1;
const v3 = Object();
const v4 = delete v3[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
