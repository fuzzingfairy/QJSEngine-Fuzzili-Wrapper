function main() { 
const v1 = {};
const v2 = [75995.54152821912,v1];
v1.__proto__ = v2;
const v3 = [v2,75995.54152821912];
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
