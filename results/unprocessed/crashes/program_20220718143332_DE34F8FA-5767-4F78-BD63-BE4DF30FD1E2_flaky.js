function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v0 in v0;
const v3 = "getOwnPropertyDescriptors";
const v5 = Object();
const v6 = Object;
const v8 = [0.0,0.0,0.0];
const v9 = [0.0,0.0,0.0];
const v11 = undefined;
const v12 = Object;
const v13 = Object;
const v15 = Object();
const v16 = [1073741824];
const v18 = Object;
const v19 = Object();
const v21 = Object();
const v23 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
