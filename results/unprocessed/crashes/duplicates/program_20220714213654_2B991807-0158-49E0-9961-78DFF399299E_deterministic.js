function main() { 
const v1 = [1.0,1.0,1.0,1.0];
v1[1.0] = v1;
const v2 = [1.0,1.0,1.0,1.0,v1];
const v3 = delete v2[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
