function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [v0,1073741824,1073741824];
const v5 = Object();
v0.__proto__ = v3;
v5[v1] = v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
