function main() { 
const v0 = -5.0;
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v4 = v1["acos"]();
const v5 = -2538514843;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
