function main() { 
const v0 = 16;
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = Object;
const v4 = -1000.0;
const v6 = Object();
const v8 = Object();
const v9 = Object;
const v10 = Object;
const v11 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
