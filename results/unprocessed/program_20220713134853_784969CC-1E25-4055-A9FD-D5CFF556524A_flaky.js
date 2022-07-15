function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = v2 == 729113.6810811516;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
