function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = [-241867.34627701226,-241867.34627701226];
const v5 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
