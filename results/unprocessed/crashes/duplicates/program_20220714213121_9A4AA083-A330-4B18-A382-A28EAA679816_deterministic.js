function main() { 
const v1 = {};
const v2 = [v1,v1];
const v3 = [-1.7976931348623157e+308,-1.7976931348623157e+308,v2];
v2[4] = v3;
v2[-2147483648] <<= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
