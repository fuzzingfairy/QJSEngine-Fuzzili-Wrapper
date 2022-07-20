function main() { 
const v2 = [-616979321,-1842284620,-616979321,-616979321];
v2[4] = v2;
v2.constructor ^= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
