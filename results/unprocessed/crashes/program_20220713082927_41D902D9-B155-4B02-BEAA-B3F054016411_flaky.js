function main() { 
const v1 = [-256];
const v2 = v1.unshift(v1);
const v3 = v2 > v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
