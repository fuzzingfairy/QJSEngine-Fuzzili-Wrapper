function main() { 
const v1 = [-65535,-65535,-65535,-65535];
v1[9] = v1;
const v2 = v1.isArray();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
