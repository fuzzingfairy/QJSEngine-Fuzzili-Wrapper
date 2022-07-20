function main() { 
const v1 = [-3357935850,-3357935850,-3357935850,-3357935850];
v1[6] = v1;
const v3 = Object();
v3[6] &= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
