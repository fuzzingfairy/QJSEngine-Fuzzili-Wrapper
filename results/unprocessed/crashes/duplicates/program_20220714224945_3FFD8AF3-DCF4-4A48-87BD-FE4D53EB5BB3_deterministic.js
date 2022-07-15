function main() { 
const v1 = [2745986558];
const v2 = v1 && v1;
v2[2] = v1;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
