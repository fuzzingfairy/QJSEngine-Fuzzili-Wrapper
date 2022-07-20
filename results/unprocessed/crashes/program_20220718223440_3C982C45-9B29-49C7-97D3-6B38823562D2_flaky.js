function main() { 
const v1 = [3.0,3.0];
const v2 = [3.0,3.0,3.0];
v1[6] = v1;
v2.length = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
