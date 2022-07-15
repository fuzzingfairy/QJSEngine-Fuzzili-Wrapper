function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v3 = v2.join(v1,1000000000000.0,v1);
const v4 = -256;
const v5 = /\w\D*/ium;
const v7 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
