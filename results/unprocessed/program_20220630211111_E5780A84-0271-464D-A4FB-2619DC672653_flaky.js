function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = Object();
Object[v0] = v1;
const v6 = Object;
const v8 = {"__proto__":Uint8ClampedArray,"a":Object,"length":Object};
let [v9] = v4;
const v10 = 61072;
const v12 = Object();
const v14 = Object();
const v15 = eval;
const v17 = Float64Array();
const v19 = Object();
const v20 = v8[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
