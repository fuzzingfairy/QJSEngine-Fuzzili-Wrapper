function main() { 
const v1 = [3.0,3.0,3.0,3.0];
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
const v4 = [3.0,3.0,3.0];
const v6 = [2720242384];
const v7 = -1.0;
v2.__proto__ = v3;
v2[v2] += v6;
const v9 = gc();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
