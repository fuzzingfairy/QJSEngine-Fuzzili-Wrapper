function main() { 
const v0 = {};
let v1 = [v0,v0,v0];
v0.__proto__ = v1;
v1 /= v1;
const v3 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
