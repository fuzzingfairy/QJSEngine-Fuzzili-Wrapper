function main() { 
let v1 = [-1.0,-1.0,-1.0,-1.0,-1.0];
const v3 = Object();
v1[7] = v1;
v1 += v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
