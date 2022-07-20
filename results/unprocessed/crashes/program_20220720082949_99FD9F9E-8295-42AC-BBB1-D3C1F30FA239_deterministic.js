function main() { 
const v1 = [129];
v1[0] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
