function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v6 = Object();
const v7 = v0.create();
const v9 = Object();
v3.constructor = v9;
const v10 = Object();
const v11 = Object;
const v12 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
