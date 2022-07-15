function main() { 
const v0 = {};
const v2 = [v0,v0,v0];
const v3 = /6+/ugym;
v0.__proto__ = v2;
v3.__proto__ = v0;
const v4 = v3 < Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
