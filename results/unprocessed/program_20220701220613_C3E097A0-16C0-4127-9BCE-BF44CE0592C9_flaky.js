function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = Object();
const v4 = Object;
v0.__proto__ = v1;
const v5 = v1();
const v6 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: