function main() { 
const v1 = {};
const v2 = [1073741824,v1,v1];
let v4 = v2["fill"](v2);
v4 %= 1073741824;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
