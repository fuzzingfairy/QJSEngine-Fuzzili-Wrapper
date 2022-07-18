function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = v1[v0];
const v5 = Object();
const v6 = Object;
const v7 = "toString";
const v8 = Object.defineProperty(v5);
const v9 = Symbol;
const v10 = Object;
const v12 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
