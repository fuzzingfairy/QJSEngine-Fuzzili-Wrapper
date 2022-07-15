function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v4 = Object();
v0.__proto__ = v1;
v4[-40434889] += v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
