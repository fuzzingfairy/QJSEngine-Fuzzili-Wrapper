function main() { 
const v0 = /f\W/gmuy;
const v1 = {};
const v2 = [v0,v1,v1];
v0.__proto__ = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
