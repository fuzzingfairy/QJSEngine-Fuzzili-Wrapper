function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = new Uint32Array();
const v4 = v3 == Uint32Array;
const v5 = v4 ^ v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
