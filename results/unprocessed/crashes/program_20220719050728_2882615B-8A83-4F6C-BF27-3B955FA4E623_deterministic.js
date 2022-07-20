function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = [200950.81812762562,200950.81812762562];
v1.__proto__ = v2;
v3[770556.2466719286] /= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
