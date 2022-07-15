function main() { 
const v1 = [NaN,NaN,NaN];
v1[2] = v1;
const v3 = v1 in Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
