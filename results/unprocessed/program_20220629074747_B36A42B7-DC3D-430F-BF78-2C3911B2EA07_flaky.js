function main() { 
const v1 = [1024,1024];
v1[6] = v1;
const v3 = new Uint8ClampedArray(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
