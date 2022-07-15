function main() { 
const v1 = [-65536,-65536,-65536,-65536,-65536];
const v2 = {};
const v3 = [v2,v2,v2];
v1[6] = v1;
v3.length = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
