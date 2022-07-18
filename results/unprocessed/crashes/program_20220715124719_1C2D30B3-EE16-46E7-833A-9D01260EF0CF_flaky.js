function main() { 
const v1 = [2.220446049250313e-16];
v1[3] = v1;
const v2 = v1();
const v3 = Object;
const v5 = Object();
const v7 = Object();
const v9 = Object();
const v10 = [v7];
const v11 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
