function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = [2147483647,2147483647];
v0.__proto__ = v1;
v3[-3183459374] |= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
