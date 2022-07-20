function main() { 
const v1 = [5.0];
v1[v1] = v1;
const v2 = v1 in v1;
const v3 = 1000000000000.0;
Object.valueOf = Object;
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
