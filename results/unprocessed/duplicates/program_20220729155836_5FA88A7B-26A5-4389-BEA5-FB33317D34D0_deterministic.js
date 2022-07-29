function main() { 
let v1 = Object;
const v3 = [Infinity,Infinity];
Object[0] = Object;
Object.__proto__ = v3;
const v6 = ++v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
