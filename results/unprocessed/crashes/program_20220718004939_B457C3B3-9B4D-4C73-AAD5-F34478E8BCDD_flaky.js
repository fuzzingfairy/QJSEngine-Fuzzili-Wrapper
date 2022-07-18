function main() { 
const v0 = {};
let v1 = [v0];
v0.__proto__ = v1;
v1 |= v0;
const v2 = Object;
const v4 = Object();
const v5 = 1000000000.0;
const v6 = Set;
const v7 = Object;
const v8 = {};
const v10 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
