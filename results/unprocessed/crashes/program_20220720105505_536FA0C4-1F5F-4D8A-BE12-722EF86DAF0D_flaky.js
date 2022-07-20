function main() { 
const v0 = WeakMap;
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v4 = Object();
v1[v1] |= v4;
const v6 = [9,9,v2];
const v8 = Object();
const v9 = {};
const v10 = [v9,9,...v2];
const v11 = Object;
const v12 = [v9,v9,v9,v9,v9];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
