function main() { 
const v1 = [2.0];
v1[5] = v1;
const v3 = Object();
const v4 = v1();
const v5 = 100;
const v6 = 1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
