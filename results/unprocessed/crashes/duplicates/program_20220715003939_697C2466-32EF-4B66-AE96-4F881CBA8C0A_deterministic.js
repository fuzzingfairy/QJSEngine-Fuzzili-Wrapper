function main() { 
const v1 = [-0.0];
v1[3] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
