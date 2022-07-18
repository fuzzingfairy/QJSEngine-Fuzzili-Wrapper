function main() { 
const v0 = {};
const v1 = [v0];
const v2 = /.\s+/y;
v0.__proto__ = v1;
const v3 = v0();
const v4 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
