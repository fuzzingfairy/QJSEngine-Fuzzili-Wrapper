function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
v0[v0] = v1;
const v3 = [-1000000000.0,-1000000000.0,v1,-1000000000.0];
function v4(v5) {
}
let v6 = v4;
function v7(v8,v9) {
    v6 = v9;
}
const v11 = Promise();
const v13 = Object();
const v14 = Object;
const v16 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
