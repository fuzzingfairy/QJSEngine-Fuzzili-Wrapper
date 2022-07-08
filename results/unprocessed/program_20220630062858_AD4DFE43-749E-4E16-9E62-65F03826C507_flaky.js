function main() { 
const v0 = {};
const v2 = [v0,v0,v0];
const v3 = Object;
v0.__proto__ = v2;
const v4 = Object[v0];
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
