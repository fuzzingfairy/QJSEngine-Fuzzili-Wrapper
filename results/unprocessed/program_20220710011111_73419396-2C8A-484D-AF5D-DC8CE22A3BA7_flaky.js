function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
v3.__proto__ = v4;
const v6 = TypeError(v3,v1,127,127);
const v7 = v6();
const v8 = WeakMap;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
