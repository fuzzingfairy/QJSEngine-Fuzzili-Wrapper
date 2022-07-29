function main() { 
const v1 = [4294967297];
v1[1] = v1;
const v3 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
