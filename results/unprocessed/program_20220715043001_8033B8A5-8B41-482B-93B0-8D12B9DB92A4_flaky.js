function main() { 
const v0 = {};
const v1 = Object;
const v2 = {};
const v3 = [v0,v2];
const v6 = Object();
v2.__proto__ = v3;
Object[v3] &= v6;
const v9 = Object();
const v10 = Int16Array();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
