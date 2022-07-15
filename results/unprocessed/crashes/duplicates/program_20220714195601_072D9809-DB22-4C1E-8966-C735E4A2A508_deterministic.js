function main() { 
const v1 = [16,16,16,16,16];
v1[1] = v1;
const v3 = Object();
const v4 = v1 < v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
