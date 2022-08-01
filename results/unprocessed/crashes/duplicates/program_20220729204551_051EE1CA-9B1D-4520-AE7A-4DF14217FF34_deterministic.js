function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v3 = {};
const v4 = [v3,v3,v3];
v1.__proto__ = v2;
v4[v1] = 65536;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
