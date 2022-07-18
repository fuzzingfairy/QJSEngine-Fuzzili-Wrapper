function main() { 
const v0 = {};
let v1 = [v0,v0];
v0.__proto__ = v1;
v1 %= Object;
const v3 = Infinity;
const v5 = eval;
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
