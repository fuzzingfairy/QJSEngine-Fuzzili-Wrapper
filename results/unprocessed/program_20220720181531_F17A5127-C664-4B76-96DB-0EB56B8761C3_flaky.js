function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,"asyncIterator"];
const v4 = [2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
v1.__proto__ = v2;
const v7 = v1 in v2;
const v8 = Object(Object,...v4,..."asyncIterator",v1,..."boolean");
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
