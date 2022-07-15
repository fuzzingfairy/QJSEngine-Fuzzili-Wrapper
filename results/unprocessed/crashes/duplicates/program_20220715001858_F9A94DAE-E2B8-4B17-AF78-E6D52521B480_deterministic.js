function main() { 
const v1 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
v1[3] = v1;
const v3 = new Int32Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
