function main() { 
const v0 = 7;
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
let v3 = 55558;
v3 /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
