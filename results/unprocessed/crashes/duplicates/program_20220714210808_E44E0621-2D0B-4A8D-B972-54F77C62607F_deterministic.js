function main() { 
const v1 = [9007199254740992,9007199254740992,9007199254740992,9007199254740992];
v1[4] = v1;
const v2 = {};
v1[v1] += v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
