function main() { 
const v0 = "function";
let v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
for (let [v3,v4,v5] of v2) {
    const v6 = v1[v4];
}
const v8 = {};
const v10 = Object();
const v11 = [v8,v8,v8,v8,v8];
const v12 = [-1000000.0,-1000000.0,-1000000.0];
const v15 = Object();
const v16 = v1--;
const v17 = {};
const v18 = [v17,v17,v17];
const v19 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
