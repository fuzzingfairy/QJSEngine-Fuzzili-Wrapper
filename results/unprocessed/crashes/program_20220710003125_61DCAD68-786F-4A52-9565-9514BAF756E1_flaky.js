function main() { 
const v0 = {};
const v1 = [v0];
const v3 = 2147483647;
v0.__proto__ = v1;
const v5 = [Object];
const v6 = Object.freeze;
const v7 = Object.apply(v6,v1);
const v8 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
