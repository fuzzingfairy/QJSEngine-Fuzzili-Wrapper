function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = [...v1];
v0.__proto__ = v2;
throw v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: