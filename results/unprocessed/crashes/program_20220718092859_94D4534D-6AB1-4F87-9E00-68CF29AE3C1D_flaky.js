function main() { 
const v2 = {};
const v3 = [v2];
v2.__proto__ = v3;
const v4 = [-2.0,-2.0,isFinite];
v4.length = v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
