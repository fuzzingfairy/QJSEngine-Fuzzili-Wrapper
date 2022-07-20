function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = typeof v0;
const v4 = v2 < "string";
Object[v1] = v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
