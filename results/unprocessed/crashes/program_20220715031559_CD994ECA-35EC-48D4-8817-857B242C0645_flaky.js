function main() { 
const v1 = [128,128];
v1[16] = v1;
v1.length = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
