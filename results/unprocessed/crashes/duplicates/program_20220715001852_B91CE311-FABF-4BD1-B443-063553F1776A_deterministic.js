function main() { 
let v2 = Object();
const v3 = [2.220446049250313e-16];
v3[8] = v3;
v2 /= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
