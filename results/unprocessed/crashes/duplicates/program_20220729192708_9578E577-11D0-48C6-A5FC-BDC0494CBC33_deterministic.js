function main() { 
const v0 = {};
let v1 = [v0];
const v3 = v1.unshift("a",v1);
v1 **= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
