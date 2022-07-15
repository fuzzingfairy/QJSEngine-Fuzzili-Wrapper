function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
let v3 = Object();
const v5 = Object();
v3 &= v3;
v1[v3] <<= Object;
const v6 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
