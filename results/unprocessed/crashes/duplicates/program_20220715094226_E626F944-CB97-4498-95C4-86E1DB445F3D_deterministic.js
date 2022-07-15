function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v4 = delete v3[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
