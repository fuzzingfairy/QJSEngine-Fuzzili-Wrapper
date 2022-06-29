function main() { 
const v1 = [2147483649,2147483649];
v1[6] = v1;
v1.length <<= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
