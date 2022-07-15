function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = [v0,...v1,v1,v0,...v1];
v0.__proto__ = v2;
v0[500900378] **= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
