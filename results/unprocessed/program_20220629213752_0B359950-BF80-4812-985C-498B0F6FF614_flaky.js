function main() { 
const v1 = [9007199254740992];
const v3 = v1["unshift"](v1);
const v4 = v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
