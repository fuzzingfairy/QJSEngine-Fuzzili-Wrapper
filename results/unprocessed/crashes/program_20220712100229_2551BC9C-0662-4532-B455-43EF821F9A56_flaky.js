function main() { 
const v0 = Object;
const v1 = 0;
const v2 = {};
const v3 = [v2,v2,v2];
v2.__proto__ = v3;
const v4 = -2.0;
const v5 = {};
const v7 = Math.expm1(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
