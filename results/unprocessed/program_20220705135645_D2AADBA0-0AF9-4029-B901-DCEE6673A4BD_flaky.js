function main() { 
const v1 = [2.0,2.0,2.0,2.0,2.0];
const v2 = [v1];
v2[8] = v2;
const v4 = v2();
const v5 = "MAX_VALUE"();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
