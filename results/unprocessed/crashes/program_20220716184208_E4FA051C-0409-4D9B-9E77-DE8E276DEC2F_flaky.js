function main() { 
const v0 = {};
const v1 = [v0];
const v2 = -4294967297;
v0.__proto__ = v1;
v1[v0] = v1;
const v3 = Object;
const v5 = Object();
const v6 = Object;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
