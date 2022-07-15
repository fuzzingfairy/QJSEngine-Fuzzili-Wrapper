function main() { 
const v1 = [NaN,NaN,NaN,NaN,NaN];
v1[0] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
