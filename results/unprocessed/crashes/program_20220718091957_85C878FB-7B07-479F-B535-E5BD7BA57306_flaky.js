function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v1();
const v5 = new Uint32Array();
const v6 = {};
const v7 = [v5,v6,v6,v6];
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
