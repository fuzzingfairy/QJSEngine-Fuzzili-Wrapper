function main() { 
const v0 = 1.7976931348623157e+308;
const v2 = [257,257,257];
v2[4] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
