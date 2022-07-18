function main() { 
const v0 = {};
let v2 = Object();
const v3 = [v0,v0,v0,v0];
[,...v2] = v3;
v0.__proto__ = v2;
const v4 = Uint8Array;
const v5 = {};
const v6 = [v5,v5,v5];
const v7 = v6[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
