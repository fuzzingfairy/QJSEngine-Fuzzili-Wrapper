function main() { 
const v1 = [-1231994520,-1231994520,-1231994520,-1231994520,-1231994520];
const v2 = {};
const v3 = [v2];
const v5 = {};
v2.__proto__ = v3;
const v7 = Object.defineProperty(v3,"a",v5);
const v8 = v7 % v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
