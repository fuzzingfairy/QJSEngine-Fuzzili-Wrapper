function main() { 
const v1 = [7];
const v3 = -2.2250738585072014e-308;
const v4 = [7,...v1,v1,-2.2250738585072014e-308,7,v3,v1,-2.2250738585072014e-308,v1];
v4[0] = v4;
const v6 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
const v7 = [-2.2250738585072014e-308];
const v9 = [Object];
const v10 = v7.map;
const v11 = Reflect.apply(v10,v4,v9);
const v12 = {};
const v14 = v11 in v6;
const v16 = Object();
const v17 = Object();
const v18 = {"get":v11,"set":Object};
const v19 = Object.defineProperty();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
