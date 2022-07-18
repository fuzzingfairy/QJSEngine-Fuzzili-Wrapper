function main() { 
const v1 = [-3.0];
v1[5] = v1;
const v2 = undefined;
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
