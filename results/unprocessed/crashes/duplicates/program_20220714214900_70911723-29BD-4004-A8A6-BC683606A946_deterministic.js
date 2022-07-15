function main() { 
const v1 = [7];
v1[7] = v1;
const v3 = new Float64Array();
Object[v1] >>>= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
