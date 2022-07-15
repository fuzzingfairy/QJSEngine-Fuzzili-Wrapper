function main() { 
const v1 = TypeError();
v1.message = v1;
const v3 = Math.log2(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
