function main() { 
const v0 = 4.0;
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v4 = new Int16Array(v2);
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
