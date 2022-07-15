function main() { 
const v1 = [4.0,4.0,4.0,4.0];
v1[0] = v1;
v1[v1] = 4.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
