function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = Uint8Array;
v1.__proto__ = v2;
const v4 = v2 in Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
