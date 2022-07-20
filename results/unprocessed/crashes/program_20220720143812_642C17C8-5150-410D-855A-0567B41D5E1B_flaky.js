function main() { 
const v0 = WeakSet;
const v1 = {};
const v2 = [v1,v1];
const v4 = Object();
v1.__proto__ = v2;
let v6 = Object();
v6 >>>= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
