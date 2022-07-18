function main() { 
const v0 = {};
const v1 = [v0];
let v3 = [670539155,670539155];
v0.__proto__ = v1;
v3 ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
