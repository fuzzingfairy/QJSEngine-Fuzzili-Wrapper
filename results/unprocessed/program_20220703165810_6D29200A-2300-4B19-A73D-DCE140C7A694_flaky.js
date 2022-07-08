function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = [1073741824];
const v4 = v1 > v3;
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
