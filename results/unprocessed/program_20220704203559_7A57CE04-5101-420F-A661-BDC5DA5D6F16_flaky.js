function main() { 
const v1 = [2374356991,2374356991,2374356991,2374356991];
const v2 = [2374356991,2374356991,2374356991,2374356991];
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
v3.__proto__ = v4;
const v7 = [Object];
const v8 = Object.isSealed;
const v9 = Function.apply(v8,v3,v7);
const v10 = [v4];
const v12 = Object();
function v13(v14) {
}
let v15 = v13;
function v16(v17,v18) {
    v13 = v17;
    v15 = v18;
}
const v20 = new Promise(v16);
const v21 = v16(v9,v16);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
