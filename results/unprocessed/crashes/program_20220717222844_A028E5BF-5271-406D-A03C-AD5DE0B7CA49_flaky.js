function main() { 
const v2 = [65537,65537,65537,65537,65537];
v2[10] = v2;
const v3 = [1000000.0,1000000.0,1000000.0,1000000.0];
v3.__proto__ |= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
