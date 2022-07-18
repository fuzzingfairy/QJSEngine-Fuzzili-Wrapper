function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[1] = v1;
const v2 = v1 in v0;
const v3 = Object;
const v5 = Uint16Array();
const v8 = Object();
const v10 = "undefined".localeCompare;
const v11 = Reflect.apply(v10,Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
