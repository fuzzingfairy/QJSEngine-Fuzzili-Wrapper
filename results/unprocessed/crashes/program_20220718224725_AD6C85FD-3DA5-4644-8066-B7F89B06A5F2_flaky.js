function main() { 
const v1 = [4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0,4.0];
v1[3] = v1;
let v2 = (4.0)[536870912];
v2 >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
