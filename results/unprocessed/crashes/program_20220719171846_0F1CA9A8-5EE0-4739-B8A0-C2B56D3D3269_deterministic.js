function main() { 
const v1 = [-2342380892,-2342380892];
v1[0] = v1;
v1.__proto__ /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
