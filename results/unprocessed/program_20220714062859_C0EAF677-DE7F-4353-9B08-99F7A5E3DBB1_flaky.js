function main() { 
const v1 = Object();
const v3 = [v1,1];
v1.__proto__ = v3;
const v4 = /(\wi\d\S)/y;
const v6 = Object();
v4[v3] &= v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
