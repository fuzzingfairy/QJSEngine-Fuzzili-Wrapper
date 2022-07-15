function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = v0;
const v4 = v2["getOwnPropertyNames"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
