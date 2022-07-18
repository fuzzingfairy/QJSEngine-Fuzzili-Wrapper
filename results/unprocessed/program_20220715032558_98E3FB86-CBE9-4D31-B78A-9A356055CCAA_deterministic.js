function main() { 
const v2 = new Int8Array();
const v3 = {};
const v5 = Object();
const v6 = [v3,v3,v3];
v3.__proto__ = v6;
const v7 = `255${v6}ignoreCase${v5}-536870912${Object}NaN${v2}species`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
