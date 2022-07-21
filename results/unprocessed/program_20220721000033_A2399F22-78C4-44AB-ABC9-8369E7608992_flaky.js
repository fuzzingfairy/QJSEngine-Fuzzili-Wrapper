function main() { 
const v0 = Int8Array;
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = Object;
const v5 = v2();
const v6 = Int8Array;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
