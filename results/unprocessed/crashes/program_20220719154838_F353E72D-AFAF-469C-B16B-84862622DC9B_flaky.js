function main() { 
const v2 = {};
const v3 = [v2,v2,v2];
v2.__proto__ = v3;
const v5 = v2.asUintN(-256,-1000.0,2777832737,-256);
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
