function main() { 
const v0 = 0;
const v1 = Object;
const v2 = {};
const v4 = [v2,v2];
v2.__proto__ = v4;
const v5 = delete Object[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
