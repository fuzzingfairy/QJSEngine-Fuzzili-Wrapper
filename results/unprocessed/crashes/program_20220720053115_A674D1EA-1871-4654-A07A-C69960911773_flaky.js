function main() { 
const v0 = {};
const v1 = {};
const v2 = [v1,v1];
const v3 = v0.__proto__;
v1.__proto__ = v2;
const v4 = v1[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
