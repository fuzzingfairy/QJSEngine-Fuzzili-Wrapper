function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
v3.__proto__ = v4;
v2[3600] <<= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
