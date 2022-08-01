function main() { 
function v0(v1,v2) {
}
const v3 = {};
const v4 = [v3];
const v6 = {};
const v8 = Object.defineProperty(v4,"a",v6);
v3.__proto__ = v8;
const v9 = v0 >= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
