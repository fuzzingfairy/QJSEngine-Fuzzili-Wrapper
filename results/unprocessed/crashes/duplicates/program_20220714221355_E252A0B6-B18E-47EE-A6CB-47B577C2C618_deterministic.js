function main() { 
const v1 = [659663134,659663134,659663134,659663134];
const v3 = new Uint8ClampedArray();
v1[2] = v1;
const v4 = v1 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
