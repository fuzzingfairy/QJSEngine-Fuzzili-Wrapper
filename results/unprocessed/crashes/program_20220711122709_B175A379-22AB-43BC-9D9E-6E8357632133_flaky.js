function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = [Infinity,Infinity];
const v5 = Object;
const v6 = v1();
const v7 = [Infinity,Infinity,Infinity,Infinity,Infinity];
const v9 = Object();
const v11 = Object();
const v13 = Object();
const v14 = [Infinity,Infinity,Infinity];
const v15 = Object;
const v16 = ReferenceError();
const v17 = Object;
const v18 = v16();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
