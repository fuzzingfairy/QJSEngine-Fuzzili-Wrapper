function main() { 
const v1 = {};
const v2 = [v1];
const v3 = {};
const v4 = [v3,v3,v3];
v3.__proto__ = v4;
v2[65536] += v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
