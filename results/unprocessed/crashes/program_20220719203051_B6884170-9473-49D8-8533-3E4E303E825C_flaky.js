function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = [2116197419,2116197419,2116197419,2116197419];
const v4 = -Infinity;
v1.__proto__ = v2;
const v6 = Object();
v3[9] = v4;
const v7 = v1.setSeconds();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
