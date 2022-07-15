function main() { 
const v0 = {};
let v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = /h/gimuy;
v1 |= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
