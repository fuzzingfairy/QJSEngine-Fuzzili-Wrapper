function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = {};
const v3 = [v2,v2];
const v4 = `jstAMKGHzt${v2}65536${v3}hasInstance${v3}name${v0}undefined`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
