function main() { 
const v0 = {};
const v1 = [v0];
const v2 = {};
const v3 = -3416043152;
v0.__proto__ = v1;
let v4 = Object;
const v5 = [v2,v2,v2,v2];
v4 &= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
