function main() { 
const v1 = [1024,1024,1024,1024,1024];
v1[2] = v1;
const v3 = v1["toString"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
