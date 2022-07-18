function main() { 
const v2 = {};
const v3 = [v2];
v2.__proto__ = v3;
const v5 = delete v3[v3];
const v7 = [4096];
const v8 = v3.sort;
const v9 = Reflect.apply(v8,"16",v7);
const v10 = {};
const v11 = [v10,v10,v10];
const v13 = Object();
throw 257;
const v15 = Object();
const v18 = Object();
const v19 = "16".__proto__;
const v20 = null;
const v22 = Object();
const v23 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
