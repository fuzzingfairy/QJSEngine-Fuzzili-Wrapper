function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
this[1537268200] >>>= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: