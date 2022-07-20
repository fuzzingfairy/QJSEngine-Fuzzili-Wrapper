function main() { 
const v1 = [NaN,NaN,NaN];
const v2 = /\d/gu;
v1[5] = v1;
const v4 = v1["flat"]();
const v5 = ReferenceError;
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
