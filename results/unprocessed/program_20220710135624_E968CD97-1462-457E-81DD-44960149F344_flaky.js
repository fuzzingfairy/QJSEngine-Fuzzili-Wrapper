function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = Object;
function v3(v4) {
}
const v5 = v3;
function v6(v7,v8) {
}
const v9 = delete v1[v0];
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
