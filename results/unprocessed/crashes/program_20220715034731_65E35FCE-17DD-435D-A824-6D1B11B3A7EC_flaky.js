function main() { 
const v1 = [1721935499];
v1[5] = v1;
v1[1721935499] >>>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
