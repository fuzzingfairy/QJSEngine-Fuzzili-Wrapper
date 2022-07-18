function main() { 
const v1 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
const v3 = Symbol.iterator;
const v4 = v1[v3];
const v6 = v4["call"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
