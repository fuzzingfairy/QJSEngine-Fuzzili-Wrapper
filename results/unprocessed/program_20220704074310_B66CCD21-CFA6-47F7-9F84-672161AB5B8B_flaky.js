function main() { 
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
const v4 = Object();
const v6 = Object();
const v8 = `bigint${2.2250738585072014e-308}zUyTiZYlrp${v2}symbol${v6}MIN_SAFE_INTEGER${Int32Array}16`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
