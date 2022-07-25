function main() { 
const v1 = [-2.0];
v1[9] = v1;
const v3 = new Uint16Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
