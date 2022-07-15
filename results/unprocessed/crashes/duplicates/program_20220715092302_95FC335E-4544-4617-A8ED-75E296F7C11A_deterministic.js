function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v5 = `source${6}65535${Object}129${v0}9007199254740993${Object}NEGATIVE_INFINITY`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
