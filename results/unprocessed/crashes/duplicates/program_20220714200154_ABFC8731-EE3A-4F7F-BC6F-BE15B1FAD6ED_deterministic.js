function main() { 
const v1 = [4.0];
v1[4] = v1;
const v2 = v1.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
