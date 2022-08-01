function main() { 
const v0 = /f\S+/ig;
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
v0[v1] **= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
