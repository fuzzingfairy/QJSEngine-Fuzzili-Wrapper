function main() { 
const v1 = [];
const v2 = [];
// 277913 is the smallest number that it will seg fault with 
v1[277913] &= v2;
let [v5,v3,,...v4] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
