function main() { 
let v1 = "prototype";
const v2 = [1024];
v1 >>= v1;
v2[v1] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
