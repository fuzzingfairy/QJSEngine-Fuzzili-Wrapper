function main() { 
let v0 = 2917808545;
const v1 = {};
const v2 = [v1,v1];
v2[7] = v2;
v0 &= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
