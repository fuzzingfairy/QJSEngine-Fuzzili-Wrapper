function main() { 
let v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = --v0;
const v6 = Object();
const v8 = Object();
const v10 = eval();
const v12 = Object();
const v13 = false;
const v14 = v8;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
