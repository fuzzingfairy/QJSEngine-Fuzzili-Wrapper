function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {};
const v3 = v2 in v0;
v0.__proto__ = v1;
const v4 = [v2,v2,v2];
const v5 = DataView;
const v6 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
