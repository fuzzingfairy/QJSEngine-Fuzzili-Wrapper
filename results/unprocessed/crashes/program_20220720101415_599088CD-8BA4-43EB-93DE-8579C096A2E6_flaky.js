function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {};
v0.__proto__ = v1;
const v3 = [v0,v2];
const v4 = {};
const v5 = [v4,v4,v4];
v1[v1] += v5;
const v6 = Object;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
