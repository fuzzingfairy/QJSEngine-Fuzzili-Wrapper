function main() { 
const v0 = {};
const v1 = [v0];
const v3 = new Int16Array();
v0.__proto__ = v1;
v3[-2147483647] ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
