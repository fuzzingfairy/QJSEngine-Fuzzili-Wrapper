function main() { 
const v1 = Object();
const v3 = Object();
const v5 = [Object,v1,v3];
Object.__proto__ = v5;
throw Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
