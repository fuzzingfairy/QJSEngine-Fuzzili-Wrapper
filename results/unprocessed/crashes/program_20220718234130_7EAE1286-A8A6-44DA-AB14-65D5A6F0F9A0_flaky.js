function main() { 
const v1 = [8,8,8,8];
v1[5] = v1;
Object.prototype ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
