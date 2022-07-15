function main() { 
const v2 = [1310506739];
v2[1310506739] = -2.0;
const v4 = v2["copyWithin"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
