function main() { 
const v0 = 3;
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
const v4 = Object();
const v5 = Object;
const v6 = v1();
const v7 = undefined;
const v8 = Object;
const v9 = v2();
const v10 = {};
const v11 = [v10,v10,v10,v2,v10];
const v13 = Object();
const v14 = "a";
const v15 = 0.0;
const v16 = /\S/uiy;
const v17 = /\S/uiy;
const v20 = Object();
const v21 = Object();
const v23 = Object();
const v26 = Object();
const v27 = Object();
const v28 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
