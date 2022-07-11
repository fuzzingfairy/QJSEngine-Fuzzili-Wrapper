function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = [v0];
const v3 = v0 >= v1;
const v4 = v3 ? v0 : v1;
const v5 = v0(v2,v4,v3,v2);
function v6(v7) {
}
let v8 = v6;
function v9(v10,v11) {
    v6 = v10;
    const v12 = Object;
    v8 = v11;
}
const v14 = 2109122725;
const v16 = Object();
for (let [v17,v18,v19,v20] of v1) {
    const v22 = Object();
}
const v23 = 815522.1709242344;
const v24 = Math;
const v25 = `
    function v26(v27) {
    }
    let v28 = v26;
    function v29(v30,v31) {
        v26 = v30;
        v28 = v31;
    }
    const v32 = Promise(v29);
`;
const v34 = eval();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
