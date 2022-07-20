function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
v1[6] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
