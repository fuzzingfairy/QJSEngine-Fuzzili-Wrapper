function main() { 
const v0 = {};
const v2 = {};
const v3 = [v2,v2,v2,v2];
v2.__proto__ = v3;
const v4 = [v0,v0,v3];
"7"[Float32Array] >>= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
