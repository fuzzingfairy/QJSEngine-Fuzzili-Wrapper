function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[0] = v1;
let v2 = v1(v1,v0,v0,v1);
const v3 = `
    const v4 = v3 >>> v1;
`;
const v6 = eval(v3);
let v7 = 2147483649;
const v8 = [v7,v7];
with (v0) {
    b = v3;
    const v10 = {"get":v6,"set":v2};
    const v12 = Object.defineProperty(v6,2147483649,v10);
}
const v15 = Object();
const v16 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
const v17 = [v7,v7];
let v18 = Object;
[v18,v18,v2,v7] = v1;
const v19 = [v0,v18];
const v20 = {};
const v21 = [v20,v20];
const v22 = v18();
const v24 = Object();
const v26 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
