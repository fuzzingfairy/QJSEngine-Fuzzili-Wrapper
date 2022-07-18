function main() { 
const v0 = 2147483648;
const v2 = [-226984.95262318198];
v2[1] = v2;
let v4 = Object();
const v5 = `
    let [v6,v7,v8] = v2;
    function v9(v10,v11,v12,v13) {
        const v15 = [-226984.95262318198,v12,v5,v9];
        const v16 = v12.isSafeInteger;
        const v17 = Reflect.apply(v16,v8,v15);
        return v15;
    }
`;
const v19 = eval(v5);
const v22 = Object();
for (const v24 of "object") {
    const v25 = `
        "object".length = v4;
        const v27 = Object();
    `;
    const v28 = eval(v25);
}
function v29(v30) {
}
const v32 = Object();
const v34 = Object();
let v35 = v29;
function v36(v37,v38) {
    v29 = v37;
    v35 = v38;
}
Object[2] = v36;
const v39 = [-226984.95262318198,-226984.95262318198,-226984.95262318198];
const v41 = Object();
const v42 = delete Object[v2];
const v44 = new Promise(v36);
const v47 = Object();
const v48 = new Float32Array(11017);
const v49 = {};
const v50 = [v49,v49,v49];
v34.length = 1;
const v54 = Object();
const v55 = Object();
const v56 = eval(v5);
const v57 = "pTstpxKUG8";
const v60 = Object();
const v61 = eval(v19);
const v62 = v4--;
const v63 = new v56(...v49,...v48,...v19,v32,...v61);
const v64 = Object();
const v65 = {};
const v67 = new Proxy(Object,v65);
const v69 = Object();
const v70 = typeof v22;
const v72 = v70 === "number";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
