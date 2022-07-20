function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
Object[v1] **= -2147483648;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
