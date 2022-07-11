function main() { 
const v0 = {};
const v1 = [v0];
const v2 = "255";
v0.__proto__ = v1;
const v5 = String["fromCharCode"](v0);
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
