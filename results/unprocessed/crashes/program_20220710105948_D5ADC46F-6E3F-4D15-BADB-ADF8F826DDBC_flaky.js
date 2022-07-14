function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = Object;
v0.__proto__ = v1;
const v3 = delete v0[v0];
const v4 = {};
const v5 = [v4,v4,v4,v4];
const v7 = Object;
const v8 = [3290625901];
const v9 = Object;
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
