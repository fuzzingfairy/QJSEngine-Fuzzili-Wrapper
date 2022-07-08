function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[1] = v1;
let v2 = 21069;
[...v2] = v1;
const v4 = new Uint8ClampedArray(v2);
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
