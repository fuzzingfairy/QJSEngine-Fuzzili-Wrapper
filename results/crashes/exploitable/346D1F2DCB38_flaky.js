function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = [-851408354,v2];
v2[0] = v2;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
