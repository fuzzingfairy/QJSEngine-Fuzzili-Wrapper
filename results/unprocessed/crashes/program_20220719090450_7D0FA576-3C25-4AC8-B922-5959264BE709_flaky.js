function main() { 
const v1 = [3.0,3.0,3.0,3.0];
v1[2] = v1;
const v3 = Object();
const v4 = v1 <= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
