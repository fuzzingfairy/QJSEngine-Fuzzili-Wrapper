function main() { 
const v1 = [-2147483649,-2147483649];
v1[9] = v1;
const v3 = Math.abs(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
