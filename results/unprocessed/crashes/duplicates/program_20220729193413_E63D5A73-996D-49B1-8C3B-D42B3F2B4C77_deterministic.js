function main() { 
const v0 = {};
const v1 = [v0];
v1[3] = v1;
const v2 = {};
const v3 = [v2,v1,v2];
const v4 = delete v0[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
