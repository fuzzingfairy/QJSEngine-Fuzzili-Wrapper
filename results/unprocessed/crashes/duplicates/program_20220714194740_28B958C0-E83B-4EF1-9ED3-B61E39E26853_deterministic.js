function main() { 
const v1 = [7,7];
v1[3] = v1;
const v3 = Object();
v1[v1] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
