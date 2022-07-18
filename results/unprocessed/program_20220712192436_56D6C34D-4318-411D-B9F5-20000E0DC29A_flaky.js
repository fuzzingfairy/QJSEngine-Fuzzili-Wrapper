function main() { 
const v1 = [4294967297];
const v3 = v1.__proto__;
v3[5] = v3;
const v4 = v3();
const v5 = [5.0,5.0];
const v6 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
