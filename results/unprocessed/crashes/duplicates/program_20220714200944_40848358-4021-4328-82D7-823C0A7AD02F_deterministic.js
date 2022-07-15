function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
v1[10] = v1;
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
