function main() { 
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
const v2 = {};
const v3 = [v2,v2,v2];
v1[0] = v1;
v3[v1] *= 64;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
