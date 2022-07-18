function main() { 
const v1 = [-268435456,-268435456,-268435456,-268435456];
const v3 = Object();
const v4 = Object(v1);
v4[0] = v4;
const v5 = v3[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
