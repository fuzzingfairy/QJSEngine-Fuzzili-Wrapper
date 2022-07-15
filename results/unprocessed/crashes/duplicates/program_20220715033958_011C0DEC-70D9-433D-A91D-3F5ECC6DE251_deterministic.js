function main() { 
const v0 = {};
const v1 = [v0];
const v2 = {};
const v3 = [v2,v1];
v2.__proto__ = v3;
const v4 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
