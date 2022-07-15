function main() { 
const v1 = [-1874159031,-1874159031];
const v2 = 5.0;
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
v3.__proto__ = v4;
const v5 = v4 in v3;
const v8 = Object();
const v9 = [-1874159031,-1874159031,-1874159031];
for (let v15 = 0; v15 < 2; v15++) {
    const v16 = {"apply":Object,"construct":EvalError,"get":EvalError,"getPrototypeOf":Object,"has":Object,"isExtensible":EvalError,"set":Object};
    const v18 = new Proxy(Object,v16);
}
const v19 = Object();
const v20 = `replace${1}bigint${v8}MAX_VALUE`;
const v21 = (v22,v23) => {
    v23[2] = Int8Array;
    return v23;
};
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
