function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v4 = new Uint32Array(40806);
const v5 = Object;
const v6 = v1();
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
