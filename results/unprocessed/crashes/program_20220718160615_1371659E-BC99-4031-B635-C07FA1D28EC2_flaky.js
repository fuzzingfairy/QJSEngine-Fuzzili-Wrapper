function main() { 
const v0 = {};
const v1 = [v0];
const v2 = Object;
v0.__proto__ = v1;
const v3 = v0();
const v4 = 4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
