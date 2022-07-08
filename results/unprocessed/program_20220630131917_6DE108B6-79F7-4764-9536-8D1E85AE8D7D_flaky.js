function main() { 
const v0 = 2.2250738585072014e-308;
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v5 = Object();
const v6 = delete "number"[v1];
const v7 = typeof v2;
const v8 = "bigint";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
