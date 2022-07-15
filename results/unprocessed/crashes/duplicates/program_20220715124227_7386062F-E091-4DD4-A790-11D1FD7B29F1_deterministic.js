function main() { 
const v1 = [249209928];
const v2 = v1.fill(v1);
const v3 = v2 << v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
