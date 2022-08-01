function main() { 
const v2 = new Float64Array();
const v5 = new Float32Array();
const v6 = {};
const v7 = [v6,v6,v6];
const v8 = {};
v6.__proto__ = v7;
const v9 = [v2,38356,v6,v7,Uint32Array,v8,38356,v5,v6];
const v10 = v9();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
