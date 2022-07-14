function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = [v0,2.2250738585072014e-308];
const v5 = Object();
const v6 = v5 ^ v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
