function main() { 
let v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
v0 ^= isNaN;
const v4 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
