function main() { 
const v1 = [2.0];
v1[2] = v1;
const v3 = {};
Reflect[v1] /= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
