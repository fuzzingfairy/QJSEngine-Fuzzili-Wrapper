function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0];
const v5 = Object();
v0.__proto__ = v3;
const v7 = Object();
throw v3;
const v8 = Object;
const v9 = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
