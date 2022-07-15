function main() { 
const v1 = [-3.0,-3.0];
v1[2] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
