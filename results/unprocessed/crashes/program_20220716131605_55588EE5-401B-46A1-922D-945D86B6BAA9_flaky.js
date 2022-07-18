function main() { 
const v0 = {};
const v1 = [v0];
v1[v1] /= v0;
v0.__proto__ = v1;
const v2 = v0();
const v3 = Object;
const v5 = Uint8ClampedArray();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
