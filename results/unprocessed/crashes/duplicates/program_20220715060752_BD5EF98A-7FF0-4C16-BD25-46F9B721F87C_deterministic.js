function main() { 
const v1 = [1000000000000.0];
const v3 = Object();
v1[2] = v1;
v3.a **= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
