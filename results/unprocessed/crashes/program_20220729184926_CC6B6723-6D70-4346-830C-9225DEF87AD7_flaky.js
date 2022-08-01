function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = {};
const v4 = [v3,v3,-9007199254740991];
const v5 = delete v4.length;
v0.__proto__ = v1;
const v7 = Math.imul(v5,v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
