function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = [129];
const v6 = Object;
const v7 = v5[v1];
const v8 = Math;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
