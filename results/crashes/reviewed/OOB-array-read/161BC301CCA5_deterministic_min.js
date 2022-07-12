function main() { 
const v1 = [];
v1[277913] = 2;
// 277913 is the smallest number that it will seg fault with 
let [...v4] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
