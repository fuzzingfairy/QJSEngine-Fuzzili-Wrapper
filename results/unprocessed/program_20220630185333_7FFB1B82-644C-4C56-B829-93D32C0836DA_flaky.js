function main() { 
const v0 = "E";
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = v1();
const v5 = v4();
const v6 = Float64Array;
const v7 = String;
const v8 = Object;
const v9 = {};
const v10 = Object;
const v12 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
