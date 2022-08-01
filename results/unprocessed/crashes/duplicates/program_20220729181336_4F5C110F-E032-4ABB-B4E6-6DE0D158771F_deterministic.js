function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = /J\s*/umgy;
let v3 = undefined;
v3 = v0;
v2[2] *= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
