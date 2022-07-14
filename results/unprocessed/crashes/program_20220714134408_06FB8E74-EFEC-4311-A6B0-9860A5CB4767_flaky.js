function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
let v2 = delete v0[1523653496];
v0.__proto__ = v1;
v2 |= v1;
const v3 = 7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
