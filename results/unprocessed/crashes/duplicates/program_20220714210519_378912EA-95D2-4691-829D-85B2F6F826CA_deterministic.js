function main() { 
const v1 = [257,257];
v1[9] = v1;
const v2 = v1 in v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
