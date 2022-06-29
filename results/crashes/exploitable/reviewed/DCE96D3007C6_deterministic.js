function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
v3[6] = v3;
const v4 = v3 + v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
