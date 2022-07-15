function main() { 
const v1 = [-1.7976931348623157e+308];
const v3 = Object();
v1[2] = v1;
v3[6] += v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
