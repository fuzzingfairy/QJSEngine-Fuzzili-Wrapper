function main() { 
const v0 = "object";
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = 41459;
const v4 = v1[v1];
const v5 = Object;
const v7 = Object();
const v9 = new Uint16Array();
const v10 = BigInt;
const v11 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
