function main() { 
const v1 = [2.220446049250313e-16];
const v2 = [v1];
v1[2] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
