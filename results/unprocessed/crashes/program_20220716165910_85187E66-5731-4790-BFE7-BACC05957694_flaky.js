function main() { 
const v0 = -1000000000.0;
const v2 = Object();
const v4 = Object();
const v5 = delete v2[9007199254740993];
const v6 = 1183;
const v7 = [v4,v4,v2,v2];
v4.__proto__ = v7;
v4[9007199254740993] = v5;
const v10 = Object["keys"](v2);
const v12 = Object();
const v13 = 8124;
const v15 = new Int16Array();
const v16 = new Uint16Array(v4);
const v17 = 1183;
const v18 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
