function main() { 
const v1 = new Float32Array();
const v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v4 = delete v1[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
