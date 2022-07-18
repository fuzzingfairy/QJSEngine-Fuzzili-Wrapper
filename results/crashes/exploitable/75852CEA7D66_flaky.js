function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
const v2 = {};
const v3 = [v1,v2,v2,v2];
v2.__proto__ = v3;
const v4 = v3.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
