function main() { 
const v2 = [1000000000000.0,1000000000000.0];
v2[9] = v2;
const v3 = new Float64Array(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
