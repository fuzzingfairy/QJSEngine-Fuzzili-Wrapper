function main() { 
const v1 = [-1000000000000.0];
v1[2] = v1;
const v2 = ~-1000000000000.0;
v1[v1] = v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
