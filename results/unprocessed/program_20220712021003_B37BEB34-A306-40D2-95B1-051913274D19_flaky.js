function main() { 
const v0 = {};
const v1 = [v0];
const v2 = null;
v0.__proto__ = v1;
const v3 = v1[v0];
const v4 = Object;
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
