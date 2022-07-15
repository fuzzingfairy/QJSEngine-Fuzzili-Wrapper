function main() { 
const v1 = [64,64,64,64,64];
v1[3] = v1;
const v3 = new Float32Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
