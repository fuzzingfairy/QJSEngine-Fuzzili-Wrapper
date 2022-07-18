function main() { 
const v1 = [7,7];
v1[3] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
