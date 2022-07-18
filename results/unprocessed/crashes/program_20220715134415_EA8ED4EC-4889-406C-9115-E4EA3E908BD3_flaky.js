function main() { 
const v1 = [-461877.1015789396,-461877.1015789396,-461877.1015789396];
const v2 = [-461877.1015789396];
const v4 = Object();
v4.__proto__ = v2;
const v5 = v2.unshift(v4);
const v6 = v1 > v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
