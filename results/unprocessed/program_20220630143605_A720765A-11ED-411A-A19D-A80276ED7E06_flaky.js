function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v0,v0,v0];
v0.__proto__ = v3;
const v5 = delete v2.b;
const v6 = Object == v5;
const v7 = Object;
const v8 = Object;
const v9 = v0();
const v10 = Object;
const v12 = Object();
const v14 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
