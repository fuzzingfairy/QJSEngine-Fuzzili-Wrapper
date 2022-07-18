function main() { 
const v1 = [2147483649,2147483649,2147483649,2147483649];
v1[1] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
