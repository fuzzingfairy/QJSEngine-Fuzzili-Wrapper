function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v4 = [2,"match",v1,2];
v0.__proto__ = v4;
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
