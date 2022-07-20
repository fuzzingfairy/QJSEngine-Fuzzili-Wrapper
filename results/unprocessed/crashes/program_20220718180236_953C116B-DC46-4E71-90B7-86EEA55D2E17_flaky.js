function main() { 
const v3 = [-1000000000000.0,-128,-128,-128,Symbol,-128,-128,-1000000000000.0,Symbol];
v3[4] = v3;
Symbol[v3] = -128;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
