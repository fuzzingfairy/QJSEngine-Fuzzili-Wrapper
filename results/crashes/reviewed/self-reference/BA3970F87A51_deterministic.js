function main() { 
const v1 = [-65536,-65536,-65536,-65536];
const v2 = v1.splice(-65536,-65536,-65536,v1);
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: