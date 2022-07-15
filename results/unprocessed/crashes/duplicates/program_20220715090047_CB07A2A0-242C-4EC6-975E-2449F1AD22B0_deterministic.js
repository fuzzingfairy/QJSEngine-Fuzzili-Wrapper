function main() { 
const v0 = {};
const v2 = [2037742734];
v2[4] = v2;
const v3 = [v0,v0,v0,v0,v0];
const v4 = v2 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
