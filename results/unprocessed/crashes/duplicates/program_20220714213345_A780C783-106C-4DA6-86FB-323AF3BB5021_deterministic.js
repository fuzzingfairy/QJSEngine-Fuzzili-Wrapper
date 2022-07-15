function main() { 
const v1 = [-65537,-65537,-65537];
v1[0] = v1;
const v2 = `string${v1}string`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
