function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = v1 in Object;
const v7 = Object();
const v8 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
