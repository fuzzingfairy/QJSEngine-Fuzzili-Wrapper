function main() { 
const v1 = [4.0];
v1[4.0] = v1;
const v3 = v1.filter(Function);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
