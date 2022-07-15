function main() { 
const v1 = [45655,45655];
v1[6] = v1;
const v3 = Math.clz32(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
