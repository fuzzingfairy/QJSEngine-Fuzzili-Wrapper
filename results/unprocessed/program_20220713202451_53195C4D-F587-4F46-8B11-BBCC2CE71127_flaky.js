function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v2,v2,v2,v0,v2];
const v4 = 1.0;
const v5 = Int8Array;
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
