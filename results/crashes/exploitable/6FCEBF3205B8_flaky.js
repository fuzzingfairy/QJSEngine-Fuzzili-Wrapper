function main() { 
let v0 = "number";
const v2 = Object();
v0 = v2;
const v4 = ["arguments",v2];
v2.__proto__ = v4;
const v6 = v0 > null;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
