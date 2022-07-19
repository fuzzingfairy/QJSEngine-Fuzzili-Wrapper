function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = v0 < v3;
const v5 = 2.220446049250313e-16;
const v6 = Object;
const v8 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
