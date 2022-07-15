function main() { 
const v1 = [1024,1024];
v1[0] = v1;
const v2 = v1 + v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
