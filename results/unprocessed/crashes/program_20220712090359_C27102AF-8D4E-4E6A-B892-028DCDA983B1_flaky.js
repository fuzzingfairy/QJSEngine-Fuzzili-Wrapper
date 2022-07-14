function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
Object[v1] *= 4096;
const v4 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
