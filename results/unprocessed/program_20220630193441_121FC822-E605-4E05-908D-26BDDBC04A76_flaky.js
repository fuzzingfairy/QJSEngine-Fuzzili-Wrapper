function main() { 
const v2 = [-65535];
const v4 = v2["splice"](-65535,-65535,v2,v2);
const v5 = Symbol(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
