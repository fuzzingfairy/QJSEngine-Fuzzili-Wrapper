function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v1 in v1;
const v3 = Object;
const v5 = Object();
const v7 = [v1,v0,isNaN,v0,v1];
let [v8,v9,v10] = v7;
const v12 = [1000.0,1000.0];
const v13 = Object;
let v15 = Object();
[v10,v15,v15] = v9;
const v17 = Object();
const v18 = class V18 {
    constructor(v20,v21,v22) {
        const v23 = v20(Object,1000.0,v20,v20);
    }
    setUTCFullYear(...v25) {
    }
    getOwnPropertyDescriptors(v27,v28) {
    }
    fromCharCode(v30,v31) {
    }
};
const v32 = 4228252846;
const v33 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
