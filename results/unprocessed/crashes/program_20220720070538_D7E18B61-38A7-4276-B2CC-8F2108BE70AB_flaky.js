function main() { 
const v2 = Object();
const v3 = [-268435456,Object,-268435456,Object,-268435456,-268435456,Object,v2,-268435456];
v3[0] = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
