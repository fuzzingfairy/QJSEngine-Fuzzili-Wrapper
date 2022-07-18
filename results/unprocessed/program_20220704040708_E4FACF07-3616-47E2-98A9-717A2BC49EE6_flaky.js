function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v4 = Object();
const v6 = v0["clear"](Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
