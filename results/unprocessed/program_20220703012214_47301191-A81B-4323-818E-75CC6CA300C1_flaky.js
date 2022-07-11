function main() { 
const v0 = {};
const v1 = Object;
const v2 = [v0,v0];
const v4 = new Uint8Array();
v0.__proto__ = v2;
const v5 = Object;
const v6 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
