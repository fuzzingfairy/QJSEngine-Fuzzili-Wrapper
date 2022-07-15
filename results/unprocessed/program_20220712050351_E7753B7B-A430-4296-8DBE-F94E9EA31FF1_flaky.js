function main() { 
const v1 = [4096,4096];
v1[8] = v1;
v1[v1] = 4096;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
