function main() { 
const v1 = {};
const v2 = [v1,v1,v1,isFinite];
const v4 = Object();
v1.__proto__ = v4;
v4.__proto__ = v2;
const v6 = Object();
v6.toString ^= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
