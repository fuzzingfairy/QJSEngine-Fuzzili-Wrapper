function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = delete v0[v1];
const v4 = "object";
const v5 = {};
const v6 = [v5,v5,v5];
const v7 = 1000000000.0;
Object[-3416954683] = v6;
const v8 = Object;
const v9 = Object;
const v11 = Object();
const v13 = Object();
const v15 = Symbol.iterator;
const v17 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
