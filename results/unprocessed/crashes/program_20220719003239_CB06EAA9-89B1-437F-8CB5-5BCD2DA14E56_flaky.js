function main() { 
const v1 = [3.0,3.0];
const v2 = {};
v1[9] = v1;
v2.__proto__ ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
