function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v2[2] = v2;
const v4 = Object();
const v5 = v4[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
