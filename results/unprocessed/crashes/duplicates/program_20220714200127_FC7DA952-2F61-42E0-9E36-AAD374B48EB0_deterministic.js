function main() { 
const v1 = [4.0];
v1[0] = v1;
const v2 = {};
const v3 = [v2];
v3[9] = v1;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
