function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
v1[3] = v1;
const v3 = v1["toString"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
