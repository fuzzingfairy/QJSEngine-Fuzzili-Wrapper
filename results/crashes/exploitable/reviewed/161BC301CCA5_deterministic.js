function main() { 
const v1 = [2.2250738585072014e-308];
v1[4145569500] &= v1;
let [v2,v3,,...v4] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
