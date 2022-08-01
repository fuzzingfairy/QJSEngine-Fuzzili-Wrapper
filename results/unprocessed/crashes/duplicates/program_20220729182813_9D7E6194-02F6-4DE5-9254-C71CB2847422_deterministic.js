function main() { 
let v0 = "constructor";
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
v0 ^= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
