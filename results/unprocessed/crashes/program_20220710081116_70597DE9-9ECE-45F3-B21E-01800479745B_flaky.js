function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = delete v0[v1];
const v3 = 55786;
const v4 = -2;
const v5 = Object;
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
