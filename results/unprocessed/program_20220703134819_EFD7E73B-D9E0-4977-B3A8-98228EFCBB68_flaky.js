function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = 1000000000000.0;
v0.__proto__ = v1;
const v3 = {};
const v5 = [1073741824];
const v7 = Object();
const v8 = [v5,v3,v3,v3,v3];
const v9 = -1024;
const v10 = {};
const v12 = Object();
const v14 = Object();
const v15 = v5.__proto__;
const v16 = [v10,v10];
const v17 = Object;
const v18 = v1();
const v20 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
