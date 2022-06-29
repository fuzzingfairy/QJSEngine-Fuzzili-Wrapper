function main() { 
let v1 = [-1000000000000.0];
v1[9] = v1;
v1 >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
