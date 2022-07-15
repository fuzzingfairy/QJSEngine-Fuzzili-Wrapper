function main() { 
const v0 = {};
const v1 = [v0];
v1[0] = v1;
const v2 = [v1,v1];
let v3 = "buA476Vuiz";
v3 >>= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
