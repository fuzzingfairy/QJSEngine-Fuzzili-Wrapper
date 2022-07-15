function main() { 
const v1 = [-2147483648,-2147483648,-2147483648,-2147483648];
v1[7] = v1;
v1[-596247765] >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
