function main() { 
const v0 = {};
let v1 = [v0,v0,v0];
v1[9] = v1;
const v2 = Object;
const v3 = v1();
const v4 = v1--;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
