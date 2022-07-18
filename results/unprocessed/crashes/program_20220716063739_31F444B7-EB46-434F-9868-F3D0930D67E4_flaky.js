function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3];
const v5 = [2.220446049250313e-16];
const v7 = Object();
v3.__proto__ = v4;
const v8 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
