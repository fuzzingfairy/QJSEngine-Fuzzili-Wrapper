function main() { 
const v1 = {};
const v2 = [v1,v1,-1000000.0,v1,v1];
const v4 = Symbol.iterator;
const v5 = v2[v4];
const v7 = [-9007199254740992,-9007199254740992,-9007199254740992,-9007199254740992,-9007199254740992];
const v9 = v7["reduce"](v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
