function main() { 
const v1 = [-2.0];
v1[7] = v1;
const v2 = {};
const v3 = [v2,v1];
const v4 = {};
const v5 = v3 in v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
