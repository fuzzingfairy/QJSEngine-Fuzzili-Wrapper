function main() { 
const v1 = [65536,65536,65536,65536];
v1[9] = v1;
v1.__proto__ *= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
