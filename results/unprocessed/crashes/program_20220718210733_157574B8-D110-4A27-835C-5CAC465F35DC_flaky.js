function main() { 
const v1 = [-323269.59626899776,-323269.59626899776,-323269.59626899776];
v1[9] = v1;
const v2 = v1;
v1[v2] = v1;
const v3 = Symbol;
const v4 = -1.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
