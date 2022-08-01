function main() { 
const v1 = [0.0];
const v2 = [0.0,0.0];
v1[3] = v1;
const v3 = v1 in v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
