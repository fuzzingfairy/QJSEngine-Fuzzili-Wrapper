function main() { 
const v2 = [9,9];
const v3 = [v2,...v2,-1000000000000.0,-1000000000000.0];
const v4 = v3.unshift(v3);
const v5 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
