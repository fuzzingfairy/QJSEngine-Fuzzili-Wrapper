function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v5 = [-2.220446049250313e-16,v1,-256,v2,-2.220446049250313e-16,v1,`WDkixnndYF`];
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
