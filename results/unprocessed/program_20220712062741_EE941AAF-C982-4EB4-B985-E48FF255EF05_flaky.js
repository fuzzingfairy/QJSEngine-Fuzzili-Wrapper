function main() { 
const v1 = [9,9,9,9];
v1[1] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
