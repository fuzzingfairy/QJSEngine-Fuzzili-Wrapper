function main() { 
const v1 = [-2147483648,-2147483648,-2147483648,-2147483648];
v1[1] = v1;
const v2 = -2147483648 < v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
