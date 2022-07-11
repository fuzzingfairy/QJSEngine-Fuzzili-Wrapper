function main() { 
let v1 = [-268435456,-268435456,-268435456];
const v2 = v1.splice(-268435456,-268435456,v1);
const v3 = v1++;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
