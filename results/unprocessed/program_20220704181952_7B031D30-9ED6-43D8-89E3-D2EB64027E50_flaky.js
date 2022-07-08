function main() { 
const v1 = [2.0,2.0,2.0,2.0,2.0];
v1[2.0] = v1;
v1[v1] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
