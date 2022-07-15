function main() { 
const v1 = [7];
v1[4] = v1;
const v3 = new Float64Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
