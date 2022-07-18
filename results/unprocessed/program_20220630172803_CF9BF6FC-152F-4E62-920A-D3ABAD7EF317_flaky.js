function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v4 = Symbol.search;
v1[v4] = 4294967297;
const v6 = delete v1[-9007199254740992];
const v7 = Object;
const v8 = eval;
const v9 = 0.0;
const v11 = v0["atan"](Object);
const v12 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
