function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
function v2(v3,v4,v5) {
}
v0.__proto__ = v1;
[v2] = v1;
const v6 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
