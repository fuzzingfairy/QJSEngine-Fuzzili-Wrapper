function main() { 
const v0 = /[E\d]/i;
const v2 = [1.0,v0];
const v3 = [v2,1.0];
v0.__proto__ = v3;
const v4 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
