function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v4 = Object;
const v5 = [1000000000000.0];
v1.__proto__ = v2;
const v6 = 0;
const v7 = 7;
const v8 = Object[v1];
const v9 = Object;
const v11 = Object();
const v12 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
