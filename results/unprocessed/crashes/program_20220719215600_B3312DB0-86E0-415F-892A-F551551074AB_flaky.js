function main() { 
const v0 = {};
const v1 = [v0];
const v2 = 20495;
v0.__proto__ = v1;
const v3 = Object;
const v4 = v0();
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
