function main() { 
const v1 = [2.220446049250313e-16];
v1[7] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
