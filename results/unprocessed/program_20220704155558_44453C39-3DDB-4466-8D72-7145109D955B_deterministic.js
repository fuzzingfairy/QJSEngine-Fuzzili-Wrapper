function main() { 
const v1 = [-2.0,-2.0,-2.0,-2.0];
v1[1] = v1;
const v2 = v1();
const v4 = Object();
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
