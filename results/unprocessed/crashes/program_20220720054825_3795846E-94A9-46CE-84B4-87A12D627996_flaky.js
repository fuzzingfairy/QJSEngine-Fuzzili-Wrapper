function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v0,v0,v0,v0];
const v4 = {};
const v5 = [v4,v4,v4,v4];
const v6 = 966902908;
v0.__proto__ = v3;
const v8 = Symbol.iterator;
const v9 = gc;
const v11 = Object();
const v12 = v0 in v11;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
