function main() { 
const v1 = [1028125982,1028125982,1028125982,1028125982];
v1[1] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
