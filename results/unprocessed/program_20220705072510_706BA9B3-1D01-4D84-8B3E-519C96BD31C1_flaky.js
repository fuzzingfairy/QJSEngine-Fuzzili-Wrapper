function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = Object;
const v4 = Object;
const v5 = v0();
const v7 = Object();
const v8 = Object;
const v10 = Object();
const v11 = delete v10[1000];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
