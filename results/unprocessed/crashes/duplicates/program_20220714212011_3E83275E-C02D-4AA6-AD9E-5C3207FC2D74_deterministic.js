function main() { 
const v0 = {};
let v1 = [v0];
v1[16] = v1;
v1 ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
