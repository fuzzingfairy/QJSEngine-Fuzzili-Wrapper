function main() { 
const v2 = [NaN];
v2[9] = v2;
const v3 = new Int32Array(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
