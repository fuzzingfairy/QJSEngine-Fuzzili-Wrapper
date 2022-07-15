function main() { 
const v1 = [536870912];
v1[7] = v1;
const v3 = new Uint8ClampedArray(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
