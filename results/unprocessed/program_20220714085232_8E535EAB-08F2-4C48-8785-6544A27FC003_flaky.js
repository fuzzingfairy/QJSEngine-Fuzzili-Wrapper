function main() { 
const v1 = [255];
const v2 = /\W*/m;
const v3 = [255,255];
const v5 = Object();
const v6 = [Object,v2,Object,v3,v5,v1,v1];
const v7 = [v1,255,255];
const v8 = {};
const v9 = [v8,v8,v8,v8];
const v10 = v1.splice(255,255,Object,v1);
const v11 = Object;
const v12 = Object;
v7[v6] = v9;
const v13 = delete v8.__proto__;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
