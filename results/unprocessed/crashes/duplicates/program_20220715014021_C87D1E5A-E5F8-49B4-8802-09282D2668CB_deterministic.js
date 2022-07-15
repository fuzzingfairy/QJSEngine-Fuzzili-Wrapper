function main() { 
const v1 = [-2147483648,-2147483648,-2147483648];
v1[0] = v1;
const v4 = v1["sort"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
