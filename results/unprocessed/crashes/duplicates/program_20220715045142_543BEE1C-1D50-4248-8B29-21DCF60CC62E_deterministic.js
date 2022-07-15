function main() { 
const v1 = [Object];
const v4 = {};
const v5 = [v4,v4];
Object.__proto__ = v1;
const v6 = v5 >= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
