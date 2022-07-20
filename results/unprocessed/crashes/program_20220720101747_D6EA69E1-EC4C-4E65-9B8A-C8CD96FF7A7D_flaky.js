function main() { 
const v1 = [Infinity];
const v2 = {};
const v3 = [v2,v1,v2];
const v4 = Object;
const v6 = Object();
v2.__proto__ = v3;
const v8 = Object();
const v9 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
