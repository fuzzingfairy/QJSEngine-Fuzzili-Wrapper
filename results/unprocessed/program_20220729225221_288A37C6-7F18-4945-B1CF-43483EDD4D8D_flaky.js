function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = delete v1[1000];
const v4 = undefined;
v2[v2] |= Uint8Array;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
