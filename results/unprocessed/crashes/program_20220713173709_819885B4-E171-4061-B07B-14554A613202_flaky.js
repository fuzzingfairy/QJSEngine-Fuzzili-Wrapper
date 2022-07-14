function main() { 
const v1 = [1,1,1,1];
v1[1] = v1;
Object.prototype ^= v1;
const v3 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
