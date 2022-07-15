function main() { 
const v1 = [9,9];
v1[2] = v1;
const v3 = new Uint8Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
