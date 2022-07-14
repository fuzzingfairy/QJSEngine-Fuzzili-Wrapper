function main() { 
const v0 = {};
const v2 = [v0,v0,v0,Object];
v2[1] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
