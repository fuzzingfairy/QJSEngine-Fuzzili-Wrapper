function main() { 
const v1 = {};
const v2 = [v1,v1];
const v3 = v2.unshift("4096",v2);
const v5 = v2["flat"]();
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
