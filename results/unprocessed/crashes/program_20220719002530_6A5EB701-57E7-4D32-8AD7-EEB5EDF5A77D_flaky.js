function main() { 
const v1 = {};
const v2 = [v1,v1,v1,0];
const v4 = Object();
v1.__proto__ = v2;
const v5 = delete v4[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
