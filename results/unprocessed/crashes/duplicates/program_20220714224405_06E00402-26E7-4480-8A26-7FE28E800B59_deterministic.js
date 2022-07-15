function main() { 
const v1 = [128,128,128];
v1[9] = v1;
const v3 = Math.cbrt(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
