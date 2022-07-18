function main() { 
const v0 = {};
let v1 = [v0,v0];
let v2 = "NaN";
let v3 = 10000;
v0.__proto__ = v1;
[v2,v1,v3] = v2;
const v5 = Object();
const v6 = v2 == v0;
const v8 = Object();
const v9 = Object;
const v12 = Object();
const v13 = {"get":isFinite};
const v14 = Object;
const v15 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
