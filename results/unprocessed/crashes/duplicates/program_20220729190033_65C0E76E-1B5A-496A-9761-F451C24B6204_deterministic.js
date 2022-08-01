function main() { 
const v0 = {};
const v1 = [v0];
const v3 = [Object];
Object.__proto__ = v3;
const v5 = v1 * Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
