function main() { 
const v0 = {};
const v1 = [v0];
const v3 = {};
const v5 = Object.defineProperty(v1,"a",v3);
v1[7] = v1;
const v6 = delete v3[v5];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
