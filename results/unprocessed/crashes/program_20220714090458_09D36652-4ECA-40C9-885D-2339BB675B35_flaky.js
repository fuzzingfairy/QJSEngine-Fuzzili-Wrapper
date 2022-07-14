function main() { 
const v0 = 9;
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = {};
const v4 = [v3,v3];
const v5 = "2147483648";
v3.__proto__ = v4;
const v6 = Symbol;
const v7 = v4.species;
const v8 = v1[v7];
const v9 = Object;
const v10 = v3();
const v12 = Object();
const v13 = "split";
const v15 = Object();
const v16 = Object;
const v17 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
