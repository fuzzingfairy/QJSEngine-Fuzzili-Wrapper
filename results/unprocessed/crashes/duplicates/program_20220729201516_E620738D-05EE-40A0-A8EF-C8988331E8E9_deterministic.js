function main() { 
const v0 = {};
const v1 = [v0];
const v3 = {};
const v5 = Object.defineProperty(v1,"a",v3);
v0.__proto__ = v1;
"a"[-1860989178] >>>= v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
