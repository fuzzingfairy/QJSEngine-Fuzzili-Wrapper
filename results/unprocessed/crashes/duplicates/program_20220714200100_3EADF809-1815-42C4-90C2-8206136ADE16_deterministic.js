function main() { 
const v1 = [Reflect,Reflect,Reflect,Reflect,Reflect];
v1[5] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
