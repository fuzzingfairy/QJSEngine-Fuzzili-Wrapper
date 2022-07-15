function main() { 
const v0 = {};
const v1 = [v0];
const v2 = /[\S]/iu;
v0.__proto__ = v1;
v0[v0] >>>= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
