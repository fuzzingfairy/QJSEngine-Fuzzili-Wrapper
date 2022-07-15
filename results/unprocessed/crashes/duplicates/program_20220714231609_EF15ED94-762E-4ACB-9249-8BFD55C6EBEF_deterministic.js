function main() { 
const v2 = [10,10,10];
const v3 = {};
const v4 = [v3,v2,v3,v3];
v3.__proto__ = v4;
const v5 = [v4];
Object[Object] >>= v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
