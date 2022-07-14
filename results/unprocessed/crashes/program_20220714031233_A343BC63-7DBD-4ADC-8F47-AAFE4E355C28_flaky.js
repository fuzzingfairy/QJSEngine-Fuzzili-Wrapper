function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = WeakMap;
v0.__proto__ = v1;
const v4 = v0.create();
const v5 = delete v4[v4];
const v7 = Object();
const v9 = Object();
const v10 = [-536870912];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
