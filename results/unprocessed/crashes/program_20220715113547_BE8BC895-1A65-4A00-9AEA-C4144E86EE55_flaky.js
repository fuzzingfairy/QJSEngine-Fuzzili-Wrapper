function main() { 
let v0 = 1024;
const v1 = [v0,v0];
[...v0] = v1;
const v2 = [v0,v0,v0];
const v4 = Object();
v0[4] = v2;
v4[v2] = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
