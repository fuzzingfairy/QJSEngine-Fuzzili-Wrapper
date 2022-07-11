function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v1();
const v4 = Object;
const v5 = -1;
const v6 = Object;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
