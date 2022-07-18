function main() { 
const v0 = {};
const v1 = v0 in v0;
const v2 = [v0,v0,v0];
const v3 = Object;
const v5 = [v2,30324];
v0.__proto__ = v2;
const v6 = 64;
const v7 = v1 > v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
