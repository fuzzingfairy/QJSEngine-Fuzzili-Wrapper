function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[9] = v1;
Object.prototype ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
