function main() { 
const v1 = new Uint16Array();
const v2 = {};
const v3 = [v2];
v2.__proto__ = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
