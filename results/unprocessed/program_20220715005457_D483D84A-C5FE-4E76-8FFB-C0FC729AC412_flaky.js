function main() { 
const v1 = [-1000000000.0];
v1[3] = v1;
const v3 = new Uint8Array();
const v4 = delete v3[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
