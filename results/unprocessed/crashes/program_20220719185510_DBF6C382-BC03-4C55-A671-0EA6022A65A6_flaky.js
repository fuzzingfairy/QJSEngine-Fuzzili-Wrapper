function main() { 
const v1 = [1.7976931348623157e+308];
const v2 = v1.fill(v1);
const v4 = Object();
const v5 = v1 % v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
