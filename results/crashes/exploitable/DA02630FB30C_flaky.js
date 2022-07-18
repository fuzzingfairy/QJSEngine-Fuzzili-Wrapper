function main() { 
const v1 = [-3966745426,-3966745426];
const v2 = v1.__proto__;
v2[4] = v2;
const v3 = v2.search();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
