function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = Object();
const v6 = Object[v0];
const v7 = Object;
let v8 = 0;
const v9 = Object;
const v10 = v8++;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
