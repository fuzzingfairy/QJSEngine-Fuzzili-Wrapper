function main() { 
const v0 = /hj\D/gi;
const v1 = {};
const v2 = [v0,v1,v1,v1,v1];
v0.__proto__ = v2;
const v3 = v0();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
