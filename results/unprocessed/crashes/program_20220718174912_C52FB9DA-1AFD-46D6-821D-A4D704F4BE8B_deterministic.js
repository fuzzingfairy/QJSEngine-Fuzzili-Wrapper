function main() { 
const v1 = [-4.0];
v1[2] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
