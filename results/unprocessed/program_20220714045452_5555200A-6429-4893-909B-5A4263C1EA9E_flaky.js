function main() { 
const v0 = {};
const v1 = [v0];
v1[0] = v1;
throw v1;
const v3 = v1["unshift"]();
const v5 = v3["get"]();
const v6 = Int8Array;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
