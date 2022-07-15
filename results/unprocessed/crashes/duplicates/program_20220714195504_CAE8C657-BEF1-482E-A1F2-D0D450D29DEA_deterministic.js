function main() { 
const v1 = [5.0];
v1[5.0] = v1;
v1[v1] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
