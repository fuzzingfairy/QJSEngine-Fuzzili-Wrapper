function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = [Infinity,Infinity];
const v5 = v0[v3];
const v6 = Object;
const v7 = ReferenceError();
const v8 = Object;
const v9 = v1();
const v10 = [Infinity,Infinity,Infinity,Infinity,Infinity];
const v11 = [Infinity,Infinity,Infinity];
const v12 = [v0,v9,v10];
const v13 = undefined;
const v14 = Object;
const v15 = v12();
const v18 = Object();
const v19 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
