function main() { 
const v1 = [350395.47996131587,350395.47996131587];
v1[9] = v1;
v1[-2147483647] >>>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
