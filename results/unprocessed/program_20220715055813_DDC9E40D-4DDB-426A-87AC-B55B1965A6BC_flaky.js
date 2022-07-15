function main() { 
const v1 = [2147483647,2147483647];
v1[4] = v1;
const v3 = isNaN(v1);
const v5 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
