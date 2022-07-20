function main() { 
const v0 = {};
let v2 = Object();
const v3 = [v0,v0];
v2 = v3;
const v4 = v3 instanceof Object;
v0.__proto__ = v2;
const v5 = Object;
const v6 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
