function main() { 
const v1 = [0];
v1[4] = v1;
const v2 = v1();
const v3 = Symbol;
const v4 = false;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
