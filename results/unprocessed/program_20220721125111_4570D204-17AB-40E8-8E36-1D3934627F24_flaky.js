function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = /x\SP/;
v0.__proto__ = v1;
const v4 = v0["isExtensible"](v1);
const v5 = {};
const v6 = [v5,v5,v5,v5,v5];
const v8 = Object();
const v9 = new v4(Object,Object,Object);
const v11 = Object();
let [v13,v14,v15] = v4;
const v16 = typeof v14;
const v18 = v16 === "string";
const v19 = -3175581450;
const v22 = Object();
const v24 = Object();
const v25 = 1885812450 != v0;
const v27 = Object();
const v28 = this;
const v29 = Object();
const v32 = Object();
const v33 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
