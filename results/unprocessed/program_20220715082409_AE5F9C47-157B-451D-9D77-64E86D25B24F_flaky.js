function main() { 
const v1 = Object();
const v3 = Object["getOwnPropertyNames"](v1);
v3[4] = v3;
const v5 = v3 >>> Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
