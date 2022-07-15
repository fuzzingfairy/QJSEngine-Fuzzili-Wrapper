function main() { 
const v1 = [10000,10000,10000,10000];
const v2 = [v1,...v1];
const v3 = v1.splice(10000,10000,10000,...v2);
const v5 = new Int16Array();
v3[v5] -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
