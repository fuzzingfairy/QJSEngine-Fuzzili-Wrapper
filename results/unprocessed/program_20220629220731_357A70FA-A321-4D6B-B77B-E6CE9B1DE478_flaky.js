function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = 4294967296;
v0.__proto__ = v1;
const v3 = v1[v1];
const v5 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
