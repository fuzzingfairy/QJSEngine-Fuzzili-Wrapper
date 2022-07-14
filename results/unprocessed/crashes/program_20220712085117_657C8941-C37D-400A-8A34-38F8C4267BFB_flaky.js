function main() { 
const v1 = [1024,1024,1024,1024];
v1[8] = v1;
const v2 = [1024,1024,1024,1024];
v2[2147483648] >>>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
