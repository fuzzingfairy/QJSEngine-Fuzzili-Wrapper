function main() { 
const v0 = {};
const v1 = {"a":v0,"d":v0,"e":v0};
const v2 = v0.__proto__;
const v3 = [v0,v0];
const v4 = "a";
const v5 = 59466;
v0.__proto__ = v3;
const v7 = Object();
const v8 = delete v1[v1];
const v10 = Object();
const v11 = Int32Array;
const v13 = delete "function"[v0];
const v15 = Object();
const v16 = {};
const v17 = [v16,v16,v16,v16];
const v18 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
