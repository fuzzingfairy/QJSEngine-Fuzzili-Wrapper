function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = v1.reverse();
v0.__proto__ = v2;
const v3 = v0[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: