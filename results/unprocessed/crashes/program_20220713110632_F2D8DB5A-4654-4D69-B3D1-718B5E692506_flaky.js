function main() { 
const v1 = [4,4,4,4,4];
v1[0] = v1;
const v2 = ~v1;
const v3 = {};
const v4 = [v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
