function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
v1[8] = v1;
const v3 = delete Object[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
