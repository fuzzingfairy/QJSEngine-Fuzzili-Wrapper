function main() { 
const v1 = [350395.47996131587,350395.47996131587];
v1[2.0] = v1;
const v3 = [2.0,2.0,v1,2.0,2.0];
const v4 = v3 | 2.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
