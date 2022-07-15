function main() { 
const v1 = [-3.0];
v1[3] = v1;
const v4 = Object();
v4[v1] = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
