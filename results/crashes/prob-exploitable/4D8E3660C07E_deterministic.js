function main() { 
let v1 = [-4294967295,-4294967295,-4294967295];
v1[129] = v1;
const v2 = v1--;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
