function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v0.toString(v1);
const v3 = -2.2250738585072014e-308;
const v4 = Object;
const v5 = -2147483647;
const v7 = Object;
const v8 = Object;
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
