function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v4 = Object();
const v5 = [-1000000000000.0,-1000000000000.0,-1000000000000.0];
const v7 = [-1073741824];
const v8 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
