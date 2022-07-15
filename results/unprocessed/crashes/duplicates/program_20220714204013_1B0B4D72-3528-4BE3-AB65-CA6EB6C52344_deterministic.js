function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = `hwZ7HZ401q${v0}number`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
