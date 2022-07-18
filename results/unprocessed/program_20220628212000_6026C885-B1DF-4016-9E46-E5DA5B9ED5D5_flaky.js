function main() { 
const v1 = [-2147483647,-2147483647,-2147483647,-2147483647];
const v2 = {};
v1[7] = v1;
const v3 = v1 in v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
