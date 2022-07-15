function main() { 
const v1 = [NaN,NaN];
v1[8] = v1;
const v3 = Object();
const v4 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
