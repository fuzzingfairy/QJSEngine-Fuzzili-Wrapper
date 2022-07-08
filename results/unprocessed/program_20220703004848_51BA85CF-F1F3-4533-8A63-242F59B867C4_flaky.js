function main() { 
let v0 = -4.0;
const v2 = {};
const v3 = [v2,v2,-631875.1234572274];
v2.__proto__ = v3;
v0 |= v3;
const v4 = Proxy;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
