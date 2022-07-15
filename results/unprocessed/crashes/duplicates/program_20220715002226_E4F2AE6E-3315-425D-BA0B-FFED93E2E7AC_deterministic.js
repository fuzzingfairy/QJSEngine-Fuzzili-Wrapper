function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = /h.VBaXa\d\w/gmy;
v3[v1] *= 22012;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
