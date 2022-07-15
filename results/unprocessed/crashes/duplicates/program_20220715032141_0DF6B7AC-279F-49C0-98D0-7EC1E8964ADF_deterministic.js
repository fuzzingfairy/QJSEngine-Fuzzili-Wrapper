function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = Object();
const v5 = Object();
v1[0] = v1;
v5[v1] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
