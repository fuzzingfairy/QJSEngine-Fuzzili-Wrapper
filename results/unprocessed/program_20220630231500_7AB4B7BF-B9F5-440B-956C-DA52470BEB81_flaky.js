function main() { 
const v0 = {};
const v1 = [v0];
const v3 = "function";
v0.__proto__ = v1;
const v5 = Object();
const v6 = v1 !== 1073741824;
const v7 = Object;
const v8 = v0();
const v9 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
