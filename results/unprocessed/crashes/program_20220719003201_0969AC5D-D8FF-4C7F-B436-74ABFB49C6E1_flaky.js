function main() { 
const v1 = [2147483648,2147483648,2147483648];
const v2 = v1.splice(2147483648,2147483648,v1);
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
