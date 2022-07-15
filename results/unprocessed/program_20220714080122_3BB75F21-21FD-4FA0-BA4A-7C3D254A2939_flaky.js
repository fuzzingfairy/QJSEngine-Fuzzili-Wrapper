function main() { 
const v2 = Object();
const v3 = [1.0];
const v4 = [1.0,1.0,1.0,1.0,1.0];
const v5 = v3;
v5[5] = v3;
const v6 = [1.0];
const v7 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
