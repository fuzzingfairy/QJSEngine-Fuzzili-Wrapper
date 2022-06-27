function main() { 
const v0 = {};
const v1 = [v0,v0];
let v2 = {};
v1[256] = v1;
v2 ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
