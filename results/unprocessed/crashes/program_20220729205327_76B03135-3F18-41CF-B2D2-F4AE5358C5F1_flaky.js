function main() { 
const v1 = [65537,65537,65537,65537,65537];
v1[2] = v1;
"-9007199254740992".constructor &= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
