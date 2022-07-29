function main() { 
const v1 = [-4294967297];
v1[2] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
