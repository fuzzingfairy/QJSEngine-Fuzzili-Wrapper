function main() { 
const v1 = [536870912];
v1[8] = v1;
const v2 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
