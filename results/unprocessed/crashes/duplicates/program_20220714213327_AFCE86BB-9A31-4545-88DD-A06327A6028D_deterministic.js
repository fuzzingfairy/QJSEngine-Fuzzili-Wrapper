function main() { 
const v1 = [-1.7976931348623157e+308,-1.7976931348623157e+308,-1.7976931348623157e+308,-1.7976931348623157e+308];
const v2 = v1.unshift(v1);
const v3 = {};
const v4 = [v3,v1];
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
