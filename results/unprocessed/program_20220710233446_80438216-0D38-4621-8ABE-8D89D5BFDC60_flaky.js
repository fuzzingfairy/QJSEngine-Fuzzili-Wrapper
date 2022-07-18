function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = {};
const v4 = [v3];
v3[v1] <<= v1;
v1.__proto__ = v2;
throw v2;
const v5 = 2070168994 >> v4;
const v6 = [2070168994,2070168994,2070168994];
const v7 = {};
const v8 = [v7,v7];
const v9 = Object;
const v11 = Object();
const v13 = Object();
const v14 = Object(2070168994);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
