function main() { 
const v0 = {};
const v2 = [v0,v0,v0,v0];
v0.__proto__ = v2;
const v3 = Object;
const v4 = Object <= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
