function main() { 
const v1 = {};
const v2 = Object;
const v3 = [v1,ReferenceError,v1,v1,v1];
const v4 = Object;
v1.__proto__ = v3;
const v5 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
