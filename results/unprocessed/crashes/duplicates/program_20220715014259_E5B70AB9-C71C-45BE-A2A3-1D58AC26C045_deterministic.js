function main() { 
const v0 = {};
let v1 = Object;
const v2 = [v0,v0,v0,v0];
[v1] = v2;
v0.__proto__ = v2;
let v3 = Object;
v3 >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
