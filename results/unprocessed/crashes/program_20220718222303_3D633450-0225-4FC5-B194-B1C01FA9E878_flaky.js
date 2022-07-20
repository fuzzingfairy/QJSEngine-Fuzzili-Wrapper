function main() { 
const v1 = [16];
v1[4] = v1;
v1.__proto__ *= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
