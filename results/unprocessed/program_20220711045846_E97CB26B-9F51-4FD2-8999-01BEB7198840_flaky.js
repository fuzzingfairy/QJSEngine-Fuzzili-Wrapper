function main() { 
let v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
let v2 = delete v0[v0];
({"__proto__":v0,"length":v2,} = v1);
const v4 = Object();
const v6 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
const v8 = {};
const v9 = {"c":v6,"constructor":2.220446049250313e-16,"e":Function,"toString":v6};
const v11 = Object();
const v12 = "m";
const v13 = [v8,v8,v8];
function v14(v15) {
}
let v16 = v14;
function v17(v18,v19) {
    v14 = v18;
    v16 = v19;
}
const v21 = new Promise(v17);
const v23 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
