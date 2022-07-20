function main() { 
const v1 = Object();
const v2 = [v1];
const v3 = v2.__proto__;
v3[4] = v3;
const v4 = Object;
const v5 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
