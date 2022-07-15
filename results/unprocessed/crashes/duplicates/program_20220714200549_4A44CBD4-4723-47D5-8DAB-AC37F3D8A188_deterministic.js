function main() { 
const v1 = {};
const v2 = [v1,v1,v1,Reflect];
v2[16] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
