function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = `string${v1}byteOffset${v1}QrFgOmJKNZ${-1528495855}sticky${v0}replace`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
