function main() { 
const v1 = [-2147483648];
const v4 = [Object,Object];
const v5 = v1.map;
Object.__proto__ = v4;
const v8 = Math.sign(Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
