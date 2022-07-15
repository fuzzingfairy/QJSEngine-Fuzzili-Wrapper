function main() { 
const v2 = [-1000000000.0];
v2[1] = v2;
const v3 = Math.hypot(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
