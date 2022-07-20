function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v4 = new Int16Array();
const v5 = 65210;
const v6 = v0 in v4;
const v7 = {};
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
