function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {"call":v0};
const v4 = new Proxy(v0,v2);
const v5 = v4 != Proxy;
const v6 = "string";
let v8 = 0;
while (v8 < 5) {
    v0.__proto__ = v1;
    const v10 = v8++;
}
const v11 = Object();
const v12 = Object;
const v14 = [76709.00498828781,76709.00498828781,76709.00498828781];
const v15 = 46545;
const v17 = Object();
const v18 = -1000.0;
const v20 = Object();
const v21 = v0 >>> v8;
const v22 = typeof Object;
const v24 = v22 === "symbol";
const v27 = Object();
const v28 = new Int32Array();
const v30 = Object();
const v33 = Object();
const v34 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
