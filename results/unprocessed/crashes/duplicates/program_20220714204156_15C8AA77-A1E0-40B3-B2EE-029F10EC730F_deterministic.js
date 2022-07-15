function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
v1[6] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
