function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
const v3 = [v2,v2];
let v4 = Uint32Array;
v4 = v1;
const v6 = v1.push(1000000000000.0,v3,v2,v4);
const v8 = Object();
const v9 = delete v8[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
