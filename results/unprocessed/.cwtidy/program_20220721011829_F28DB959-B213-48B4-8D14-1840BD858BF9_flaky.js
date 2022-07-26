function main() { 
const v2 = "-1073741824";
const v3 = {};
const v4 = [v3,"hasInstance",v3];
v3.__proto__ = v4;
const v6 = [v4];
const v7 = "hasInstance".padEnd;
const v8 = v6.apply(v7,String,v6);
const v11 = Object();
const v12 = [1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0,1000000000000.0];
const v14 = v11();
Reflect.__proto__ = Object;
const v16 = Object();
const v17 = Object;
const v18 = v11();
const v19 = Object;
const v20 = (1000000000000.0)();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
