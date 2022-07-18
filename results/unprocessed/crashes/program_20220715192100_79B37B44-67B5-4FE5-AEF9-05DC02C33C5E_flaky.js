function main() { 
const v1 = [2147483647];
v1[5] = v1;
const v3 = Object();
const v4 = {};
const v5 = "257";
const v6 = Object;
const v8 = Object();
v8[3038666679] ^= v1;
const v9 = typeof Object;
const v11 = v9 === "string";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
