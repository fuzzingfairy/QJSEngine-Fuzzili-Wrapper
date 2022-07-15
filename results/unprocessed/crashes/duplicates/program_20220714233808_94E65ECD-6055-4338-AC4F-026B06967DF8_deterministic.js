function main() { 
const v2 = Object();
const v3 = [-232276592,v2,-232276592,-232276592,-232276592];
v2.__proto__ = v3;
const v5 = {"get":Object};
const v6 = Object.defineProperty(v3,9007199254740991,v5);
const v7 = v6();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
