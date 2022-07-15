function main() { 
const v0 = {};
const v1 = [v0];
v1[4] = v1;
const v2 = `epJAZt6Oz8${v0}arguments${v1}-4294967296${v0}string`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
