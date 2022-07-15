function main() { 
const v1 = delete (2147483649)[2147483648];
const v2 = [v1,2147483649,2147483649];
v2[0] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
