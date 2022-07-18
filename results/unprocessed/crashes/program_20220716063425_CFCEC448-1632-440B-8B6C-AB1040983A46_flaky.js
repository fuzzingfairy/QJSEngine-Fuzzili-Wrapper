function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = 2686 >= v2;
const v5 = Float64Array();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
