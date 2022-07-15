function main() { 
const v1 = [10,10,10];
const v2 = {};
const v3 = [v2,v2,v1,v2];
const v4 = [v2];
v2.__proto__ = v4;
const v5 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
