function main() { 
let v1 = [2193847505,2193847505,2193847505,2193847505];
v1[9] = v1;
v1 >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
