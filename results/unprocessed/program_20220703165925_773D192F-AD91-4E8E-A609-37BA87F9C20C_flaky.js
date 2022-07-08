function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [1073741824];
v3[5] = v3;
v0[v3] *= v0;
let [] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
