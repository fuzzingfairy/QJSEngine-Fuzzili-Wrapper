function main() { 
const v0 = {};
let v2 = Object();
const v3 = [v0];
const v4 = [Object,v2,v2,v2];
Object.__proto__ = v4;
v2 >>>= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
