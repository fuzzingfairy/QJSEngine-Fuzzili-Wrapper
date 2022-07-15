function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = 1000.0;
const v5 = Object();
const v7 = Math.tanh(v1);
const v8 = 2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
