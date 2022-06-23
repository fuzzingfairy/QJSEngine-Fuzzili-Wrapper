function main() { 
const v1 = [-1000000000000.0,-1000000000000.0,-1000000000000.0];
const v3 = Object(v1);
v1[1] = v3;
const v4 = v3 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
