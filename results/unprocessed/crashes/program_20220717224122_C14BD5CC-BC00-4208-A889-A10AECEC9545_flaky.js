function main() { 
const v0 = {};
const v1 = [v0,v0];
let v2 = v1[1073741824];
v2 = v0;
v0.__proto__ = v1;
const v3 = v2();
const v4 = Object;
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
