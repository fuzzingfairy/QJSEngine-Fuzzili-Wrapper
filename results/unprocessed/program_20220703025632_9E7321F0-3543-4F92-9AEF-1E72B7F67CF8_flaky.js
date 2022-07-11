function main() { 
const v0 = {};
const v1 = [v0];
const v2 = Uint32Array;
const v3 = Int8Array;
v0.__proto__ = v1;
const v4 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
