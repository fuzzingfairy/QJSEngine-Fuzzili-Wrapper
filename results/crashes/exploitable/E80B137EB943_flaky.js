function main() { 
const v1 = [1028125982];
v1[7] = v1;
Object.prototype |= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
