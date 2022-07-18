function main() { 
const v1 = [];
v1[400000] = 'aAA%AAsAABAA$AAnA';
// 277914 is the smallest number that it will seg fault with 
let [...v4] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
