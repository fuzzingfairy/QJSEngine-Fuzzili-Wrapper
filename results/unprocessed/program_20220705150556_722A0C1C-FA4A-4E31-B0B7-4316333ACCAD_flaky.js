function main() { 
let v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
v0 /= v0;
const v3 = Symbol.toStringTag;
const v4 = v1[v3];
const v5 = {};
const v6 = 342941.6797887997;
const v7 = Error;
const v8 = Promise;
const v9 = {};
const v11 = Object();
const v12 = "length";
const v14 = Object();
const v16 = isNaN();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
