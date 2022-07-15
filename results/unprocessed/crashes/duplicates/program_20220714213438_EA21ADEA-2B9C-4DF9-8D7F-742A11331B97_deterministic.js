function main() { 
const v1 = {};
const v2 = [-1.7976931348623157e+308,v1];
v2[0] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
