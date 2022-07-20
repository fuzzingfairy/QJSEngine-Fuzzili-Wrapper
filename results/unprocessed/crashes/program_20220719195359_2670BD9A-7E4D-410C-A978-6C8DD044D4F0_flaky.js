function main() { 
const v1 = [64];
v1[2] = v1;
const v2 = +v1;
const v4 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
