function main() { 
const v2 = [-1.7976931348623157e+308];
v2[0] = v2;
const v3 = new Uint8ClampedArray(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
