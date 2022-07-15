function main() { 
const v1 = [-2147483647];
v1[3] = v1;
const v2 = v1[3];
const v3 = {};
const v4 = [v2,v3,v3,v3];
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
