function main() { 
const v0 = {};
const v1 = [v0];
const v3 = {};
const v5 = Object.defineProperty(v1,"a",v3);
const v6 = {};
const v7 = [v6,v6,v6];
v0.__proto__ = v5;
v7[6] += v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
