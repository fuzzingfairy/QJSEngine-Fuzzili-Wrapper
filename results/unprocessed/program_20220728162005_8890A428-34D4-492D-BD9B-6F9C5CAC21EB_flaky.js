function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v1[5] = v1;
const v2 = /\d5/gi;
const v3 = v2[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
