function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = [...v1,v1,v0,v0,...v1,v0,v0,v0,v1];
v0.__proto__ = v2;
let v4 = Object();
v4 += v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
