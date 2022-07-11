function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
let v3 = Object();
const v4 = v0.log2();
const v5 = ++v3;
const v6 = Object;
const v7 = -1.0;
const v9 = Object();
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
