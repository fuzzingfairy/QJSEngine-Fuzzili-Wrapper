function main() { 
const v1 = Object();
const v2 = {};
const v3 = [v2,v2,v2];
v3[0] = v3;
v1[v3] = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
