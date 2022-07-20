function main() { 
const v2 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
const v3 = "MIN_SAFE_INTEGER" >= v2;
v2[2] = v2;
v2[v2] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
