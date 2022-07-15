function main() { 
const v2 = Object();
const v4 = {};
const v5 = [Object,v2,v4,v4];
Object.__proto__ = v5;
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
