function main() { 
const v0 = /\S*/iy;
const v1 = {};
const v2 = [v0];
function v3(v4,v5,v6) {
}
const v7 = {};
const v8 = [v7];
const v9 = v0.ignoreCase;
const v10 = {};
const v11 = [v10];
const v13 = {};
let v14 = Object;
const v15 = v14.defineProperty(v11,"a",v13);
function v16(v17,v18) {
    const v19 = v2.__proto__;
    const v20 = {};
    const v21 = [v20];
    let v22 = "a";
    const v23 = {};
    const v24 = Object;
    const v25 = {};
    const v26 = [v25];
    [v14,...v22] = v22;
}
const v27 = {};
const v28 = [v27];
const v30 = {};
const v32 = Object.defineProperty(v28,"a",v30);
for (let v36 = 0; v36 < 20; v36++) {
    const v37 = {"a":v36,"b":v32,"n":v16,"p":v16};
    const v38 = v16(v37);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
