function main() { 
const v1 = [1000000000.0,1000000000.0,1000000000.0];
v1[8] = v1;
const v2 = +v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
