function main() { 
const v1 = Object();
const v3 = [-9007199254740993,-9007199254740993,-9007199254740993];
const v4 = {};
const v5 = [v4,v4,v4];
const v7 = String();
v4.__proto__ = v5;
v7[1512589140] *= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
