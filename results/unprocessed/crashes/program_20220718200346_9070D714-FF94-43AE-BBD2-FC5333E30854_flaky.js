function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
v1[2] = v1;
const v2 = delete v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
