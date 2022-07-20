function main() { 
const v0 = -Infinity;
let v1 = [v0,v0,v0];
v1[1] = v1;
v1 ^= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
