function main() { 
const v1 = [2147483648];
const v2 = {};
const v3 = [v1];
v1[6] = v3;
v2[v1] = 2147483648;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
