function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = [1000000000.0,1000000000.0,1000000000.0,1000000000.0,1000000000.0];
const v4 = {};
const v5 = [v4,v4,v4,v4];
v3[0] = v3;
v1[v3] -= v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
