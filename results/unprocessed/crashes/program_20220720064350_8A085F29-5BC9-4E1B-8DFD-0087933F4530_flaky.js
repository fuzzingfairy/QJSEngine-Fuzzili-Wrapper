function main() { 
const v0 = {};
const v3 = [Object,9007199254740992];
const v5 = Object();
Object.__proto__ = v3;
v5.d = v0;
const v6 = v3 in Object;
const v7 = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
