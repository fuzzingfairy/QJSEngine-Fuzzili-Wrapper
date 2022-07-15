function main() { 
const v1 = [-2147483647];
v1[0] = v1;
const v3 = Math.trunc(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
