function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
v1[-256] ^= v0;
const v2 = /\dy/g;
const v3 = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
