function main() { 
const v1 = {};
const v2 = [Object,v1];
Object.__proto__ = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
