function main() { 
const v1 = /(\s\s)/gy;
const v3 = {};
const v4 = [v3,v3];
function v6(v7,v8,v9) {
    v1.length = 1;
    return v8;
}
const v11 = `
    const v13 = Object();
    v3.__proto__ = v4;
    const v14 = delete v13[65536];
    const v16 = Object();
    const v17 = {"call":EvalError,"construct":Object,"defineProperty":Object,"get":Object,"getOwnPropertyDescriptor":EvalError,"ownKeys":v6,"preventExtensions":Object,"setPrototypeOf":v6};
    const v19 = new Proxy(v13,v17);
`;
const v21 = eval(v11);
function v22(v23) {
    const v24 = {};
    const v25 = [v24,v24,v24,v24,v24];
    const v28 = Object();
    const v29 = [,-4051144344,EvalError,eval,-4051144344,Object,...v25,v23,Object];
    const v30 = delete v4[9];
    const v32 = Object();
    const v33 = delete v29[1011751049];
    v29[8] = v24;
    const v34 = false;
    const v36 = Object();
}
const v37 = this;
const v39 = [1,1,1];
const v41 = [];
const v42 = v39.pop;
const v43 = Reflect.apply(v42,v39,v41);
const v45 = Object();
const v46 = [...v4,-4051144344];
const v48 = [8,8];
const v50 = [65536];
const v52 = Object();
for (let v56 = 0; v56 < 20; v56++) {
    const v58 = v22(true);
}
const v59 = v4 in v1;
if (v59) {
    throw v11;
    const v61 = Object();
} else {
    const v62 = [v46,65536,-4294967297,EvalError];
}
const v64 = Object();
const v65 = v22(v59);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
