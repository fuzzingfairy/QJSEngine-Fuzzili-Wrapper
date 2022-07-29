function main() { 
const v1 = [2263173362];
v1[9] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
