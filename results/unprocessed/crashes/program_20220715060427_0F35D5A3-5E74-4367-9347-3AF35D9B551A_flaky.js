function main() { 
const v1 = [2.0,2.0];
v1[8] = v1;
const v3 = Object();
const v4 = Object;
v3[2.0] >>>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
