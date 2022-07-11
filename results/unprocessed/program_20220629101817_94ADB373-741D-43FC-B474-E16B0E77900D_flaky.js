function main() { 
const v0 = {};
const v1 = [v0];
v1[2] = v1;
let v2 = 0;
const v3 = v2++;
const v4 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
