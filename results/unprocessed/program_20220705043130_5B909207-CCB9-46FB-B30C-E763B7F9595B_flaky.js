function main() { 
const v0 = {};
const v1 = "object";
const v3 = [v0,16,16,16];
v0.__proto__ = v3;
const v4 = v0();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
