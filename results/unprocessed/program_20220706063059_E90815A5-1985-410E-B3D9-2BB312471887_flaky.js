function main() { 
const v0 = {};
const v2 = {};
const v3 = [v2,v2,v2,v2];
v2.__proto__ = v3;
let v4 = Object();
v4 = v3;
const v6 = [3,3];
const v7 = `kERMaAzLxf${v6}byteLength${v4}isConcatSpreadable${v0}string`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
