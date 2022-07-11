function main() { 
const v1 = {};
let v2 = [v1,v1,v1,v1];
const v3 = 1000000000000.0;
v1.__proto__ = v2;
v2 |= Uint8ClampedArray;
const v5 = Object();
const v8 = Object();
const v9 = Object();
throw v9;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
