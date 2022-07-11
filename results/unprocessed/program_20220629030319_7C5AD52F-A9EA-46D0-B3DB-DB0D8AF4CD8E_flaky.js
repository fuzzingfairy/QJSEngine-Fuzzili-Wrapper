function main() { 
let v1 = [2.0,2.0,2.0];
v1[9] = v1;
const v2 = --v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
