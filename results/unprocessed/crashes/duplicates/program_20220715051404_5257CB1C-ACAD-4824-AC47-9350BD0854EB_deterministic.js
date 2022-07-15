function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = [-192395.8684460983,v1];
v1.__proto__ = v2;
v1[v3] **= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
