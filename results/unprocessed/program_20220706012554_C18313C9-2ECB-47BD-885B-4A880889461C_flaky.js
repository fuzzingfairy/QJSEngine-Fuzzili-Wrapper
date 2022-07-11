function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[8] = v1;
throw v1;
const v2 = 16998;
const v3 = {};
const v5 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
