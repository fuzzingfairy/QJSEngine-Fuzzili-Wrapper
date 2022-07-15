function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = "268435456";
v1[3] |= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
