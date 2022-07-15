function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,Array];
const v3 = Object;
v1.__proto__ = v2;
const v4 = 100;
const v5 = 1;
const v7 = new Uint16Array();
const v8 = v7[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
