function main() { 
const v1 = [129,129,129,129];
v1[7] = v1;
v1.constructor >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
