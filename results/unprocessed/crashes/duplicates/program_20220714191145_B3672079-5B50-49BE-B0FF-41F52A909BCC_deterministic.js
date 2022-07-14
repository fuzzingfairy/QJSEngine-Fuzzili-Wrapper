function main() { 
const v1 = {};
const v2 = [-631827.6418985324,v1,v1,-631827.6418985324,v1,v1,-631827.6418985324,v1,-631827.6418985324,v1];
v1.__proto__ = v2;
const v4 = Object();
const v5 = v2 <= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
