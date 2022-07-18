function main() { 
const v1 = {};
const v2 = ["name",v1];
v2[1] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
