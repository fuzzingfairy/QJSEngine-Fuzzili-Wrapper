function main() { 
const v1 = [10,10,10];
v1[10] = v1;
const v2 = v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
