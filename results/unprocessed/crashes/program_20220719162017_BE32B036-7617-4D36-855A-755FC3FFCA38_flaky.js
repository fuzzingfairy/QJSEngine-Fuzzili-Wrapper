function main() { 
const v0 = {};
const v2 = Object();
const v4 = Object << v0;
const v5 = [v0,v0,v0,v0];
const v8 = v4;
const v9 = [v8,1000000000000.0,v5,129];
v0.__proto__ = v5;
const v10 = v9 in v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
