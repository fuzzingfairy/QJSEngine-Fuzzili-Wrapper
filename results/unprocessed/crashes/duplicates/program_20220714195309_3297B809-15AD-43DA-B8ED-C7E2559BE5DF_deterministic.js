function main() { 
const v1 = [16,16,16,16,16];
v1[5] = v1;
const v2 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
