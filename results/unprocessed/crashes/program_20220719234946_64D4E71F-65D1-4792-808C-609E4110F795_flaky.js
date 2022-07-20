function main() { 
const v1 = Object();
const v2 = [v1];
v1.__proto__ = v2;
const v4 = `-268435456${v1}257${Object}MIN_SAFE_INTEGER`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
