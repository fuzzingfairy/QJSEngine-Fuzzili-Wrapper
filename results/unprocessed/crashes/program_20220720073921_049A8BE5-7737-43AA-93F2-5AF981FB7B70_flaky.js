function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = Object();
v0.__proto__ = v1;
const v5 = Object();
const v6 = v5[v0];
const v7 = Symbol;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
