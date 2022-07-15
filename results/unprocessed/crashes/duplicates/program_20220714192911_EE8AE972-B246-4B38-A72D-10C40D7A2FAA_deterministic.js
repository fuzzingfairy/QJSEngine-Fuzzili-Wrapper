function main() { 
const v2 = {};
const v3 = [v2,v2,v2];
const v4 = {};
const v5 = [47293,Uint8Array,v3,v4,v4];
v2.__proto__ = v3;
const v7 = new Uint8Array();
v4[v5] = v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
