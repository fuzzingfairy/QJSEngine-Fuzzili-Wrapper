function main() { 
const v2 = Object();
const v3 = [Object,v2,50921,50921,v2,50921,50921,50921];
v2.__proto__ = v3;
const v4 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
