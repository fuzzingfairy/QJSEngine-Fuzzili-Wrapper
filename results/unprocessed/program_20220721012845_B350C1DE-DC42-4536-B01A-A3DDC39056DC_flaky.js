function main() { 
const v0 = {};
const v1 = 7;
const v2 = [v0,v0];
v2[0] = v2;
const v3 = v2();
const v5 = Object();
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
