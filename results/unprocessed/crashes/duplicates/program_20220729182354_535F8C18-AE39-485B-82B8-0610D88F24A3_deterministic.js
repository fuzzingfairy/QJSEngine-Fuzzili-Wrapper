function main() { 
const v0 = /K.T/;
const v1 = {};
const v2 = [v1,v1,v1];
v2[0] = v2;
v0[v2] = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
