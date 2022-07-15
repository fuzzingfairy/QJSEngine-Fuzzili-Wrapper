function main() { 
const v1 = [536870912];
v1[3] = v1;
v1.__proto__ >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
