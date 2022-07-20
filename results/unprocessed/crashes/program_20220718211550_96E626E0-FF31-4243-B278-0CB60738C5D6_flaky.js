function main() { 
const v1 = [3930922503,3930922503,3930922503,3930922503];
v1[3] = v1;
Object.prototype |= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
