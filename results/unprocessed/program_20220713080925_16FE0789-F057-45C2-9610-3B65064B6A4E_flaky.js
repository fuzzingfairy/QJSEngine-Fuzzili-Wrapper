function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v4 = [v2];
v1.__proto__ = v4;
const v5 = v1.padEnd(-1000000000000.0,Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
