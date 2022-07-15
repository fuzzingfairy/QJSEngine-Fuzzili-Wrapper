function main() { 
let v1 = [3.0,3.0,3.0,3.0];
const v3 = Object();
v1[4] = v1;
v1 -= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
