function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = {};
const v3 = [v1,v1,v2];
v0.__proto__ = v1;
const v4 = v3.flatMap();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
