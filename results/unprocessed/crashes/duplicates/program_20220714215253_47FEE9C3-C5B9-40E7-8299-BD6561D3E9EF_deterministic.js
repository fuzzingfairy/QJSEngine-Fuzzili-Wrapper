function main() { 
const v1 = Object();
const v3 = [v1];
v1.__proto__ = v3;
Object[v1] = 1310506739;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
