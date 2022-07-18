function main() { 
const v1 = [-1073741824,-1073741824,-1073741824];
v1[8] = v1;
const v2 = v1();
const v3 = {};
const v4 = [v3,v3,v3,v3];
let v6 = 1;
v4[8] = 0;
const v7 = v6++;
const v8 = -1000000.0;
const v10 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
