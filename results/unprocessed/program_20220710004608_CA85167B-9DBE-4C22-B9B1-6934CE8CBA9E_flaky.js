function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
v1[2771706941] &= v0;
const v4 = Object();
const v5 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
