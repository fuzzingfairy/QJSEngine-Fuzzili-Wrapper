function main() { 
const v0 = -Infinity;
const v1 = [v0,v0];
const v2 = {};
const v3 = [v2,v2,v2,v2];
v3[7] = v3;
const v5 = Object();
v5[v1] -= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
