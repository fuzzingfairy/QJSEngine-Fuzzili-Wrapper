function main() { 
const v1 = [2329482407];
v1[6] = v1;
const v2 = {};
const v3 = [v2,v1];
const v4 = -v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
