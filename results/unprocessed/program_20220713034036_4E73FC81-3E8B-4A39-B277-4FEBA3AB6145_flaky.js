function main() { 
const v1 = [-4.0,-4.0,-4.0];
v1[6] = v1;
v1.length -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
