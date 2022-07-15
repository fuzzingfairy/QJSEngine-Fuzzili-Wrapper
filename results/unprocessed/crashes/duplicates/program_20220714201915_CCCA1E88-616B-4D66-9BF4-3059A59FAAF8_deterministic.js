function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
v1[1] = v1;
v1[v1] = Infinity;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
