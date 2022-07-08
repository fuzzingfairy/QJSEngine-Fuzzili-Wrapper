function main() { 
const v1 = Uint8ClampedArray;
const v2 = {};
const v3 = [v2,1000,v2];
const v5 = 2.0;
const v7 = Symbol();
v2.__proto__ = v3;
const v8 = delete Object[v7];
const v9 = Symbol(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
