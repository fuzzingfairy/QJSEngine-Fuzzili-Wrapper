function main() { 
const v0 = /.4\S/y;
const v1 = {};
const v2 = [v1,v1,v1,v0,v1];
v1.__proto__ = v2;
throw v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
