function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[1] = v1;
const v2 = v1();
const v3 = {};
const v4 = [v3,v3];
const v5 = Int32Array;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
