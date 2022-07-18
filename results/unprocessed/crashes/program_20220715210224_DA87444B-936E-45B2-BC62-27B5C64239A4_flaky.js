function main() { 
const v1 = {};
const v2 = [v1,v1,-2.0,v1,v1];
v1.__proto__ = v2;
const v4 = v1 == 250126.942948177;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
