function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v1();
const v4 = /\s9\D\w?/m;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
