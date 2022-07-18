function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = v2 >>> -1.7976931348623157e+308;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
