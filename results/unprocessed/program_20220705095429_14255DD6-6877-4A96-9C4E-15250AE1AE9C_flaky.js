function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3,-256,v3];
v3.__proto__ = v4;
const v5 = v2[v4];
const v6 = Object;
const v7 = undefined;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
