function main() { 
let v0 = {};
const v1 = [v0,v0,v0,v0];
let v2 = 255;
const v3 = [v2,v2];
v0.__proto__ = v1;
[v0,,v2] = v1;
v0 ^= v0;
const v4 = -904564.5243703024;
const v5 = Object;
const v6 = 1000000.0;
const v7 = Object;
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
