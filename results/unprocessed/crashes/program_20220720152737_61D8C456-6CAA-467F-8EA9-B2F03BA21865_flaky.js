function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
v1.length = v0;
const v2 = 37623;
const v4 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
