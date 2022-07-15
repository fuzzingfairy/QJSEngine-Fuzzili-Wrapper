function main() { 
const v0 = {};
const v1 = [v0];
const v3 = Object();
v0.__proto__ = v1;
const v4 = delete Object[v3];
v1[v0] ^= v0;
const v5 = Object;
const v6 = Object;
const v8 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
