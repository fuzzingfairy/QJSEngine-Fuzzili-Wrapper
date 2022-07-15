function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = [-1000.0,v0,-1000.0,-1000.0];
v3[6] = v3;
const v4 = v3 in v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
