function main() { 
const v0 = {};
let v2 = Object();
const v3 = [v0,v0,v0,v0];
v3[0] = v3;
v2 %= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
