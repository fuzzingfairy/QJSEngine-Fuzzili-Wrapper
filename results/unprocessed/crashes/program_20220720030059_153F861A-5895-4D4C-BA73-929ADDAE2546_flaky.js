function main() { 
const v1 = {};
const v2 = 1;
const v3 = [v1,v1,v1,v1,v1];
const v5 = Symbol.species;
const v6 = Object[v5];
v1.__proto__ = v3;
v1[v1] = v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
