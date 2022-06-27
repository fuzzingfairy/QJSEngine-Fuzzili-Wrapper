function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = `1073741824${v1}tJSVQyzeKB${v0}2147483649`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
