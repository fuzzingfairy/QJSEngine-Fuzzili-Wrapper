function main() { 
const v0 = {};
let v1 = [v0,v0,v0];
const v2 = -2.0;
let v3 = "object";
function v4(v5,v6,v7,v8,v9) {
    v1[1] = v6;
}
const v10 = {};
const v11 = [v10];
const v13 = {};
const v15 = Object.defineProperty(v11,"a",v13);
const v16 = {};
const v17 = [v16];
const v19 = {};
let v21 = Object.defineProperty(v17,"a",v19);
function v22() {
    const v23 = 682908330;
    const v24 = {"get":Object,"set":v4};
    const v25 = {};
    const v26 = [v25];
    const v28 = {};
    const v30 = Object.defineProperty(v26,"a",v28);
    const v31 = delete v24.__proto__;
    [,v1,v21,v3] = v11;
    for (const v32 in v16) {
    }
}
const v33 = v22();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
