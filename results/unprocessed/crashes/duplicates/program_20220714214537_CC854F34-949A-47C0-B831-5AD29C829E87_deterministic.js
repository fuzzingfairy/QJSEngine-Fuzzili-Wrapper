function main() { 
const v1 = [7];
v1[v1] = v1;
const v2 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
