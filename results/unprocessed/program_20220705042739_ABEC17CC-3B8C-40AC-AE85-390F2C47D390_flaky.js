function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = 1.0;
const v5 = v0[64];
v1[v1] = v0;
const v7 = Object();
const v9 = [9,9,9];
const v11 = Object();
const v13 = Object();
function* v14(v15,...v16) {
    const v19 = Object();
    const v20 = {"__proto__":v19,"a":v0,"b":9,"d":v15,"length":v15,"toString":Object,"valueOf":Object};
    const v22 = Object();
    const v23 = Object();
    const v24 = v23[v23];
    yield* Object;
    return v0;
}
const v25 = v0.getUint8;
const v27 = v25["sort"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
