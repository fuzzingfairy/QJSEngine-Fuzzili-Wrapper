function main() { 
const v0 = {};
const v1 = [v0];
const v2 = v0;
v2.__proto__ = v1;
const v4 = delete Object[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
