function main() { 
const v1 = [-65537,-65537,-65537,-65537,-65537,-65537,-65537,-65537,-65537];
v1[1] = v1;
v1.__proto__ -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
