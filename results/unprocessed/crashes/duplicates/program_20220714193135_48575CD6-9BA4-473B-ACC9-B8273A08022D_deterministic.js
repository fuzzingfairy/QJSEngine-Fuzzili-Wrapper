function main() { 
const v1 = [3.0];
v1[3] = v1;
const v3 = Math.sinh(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
