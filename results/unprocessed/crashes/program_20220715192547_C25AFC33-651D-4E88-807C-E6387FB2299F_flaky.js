function main() { 
const v1 = [2147483647];
const v2 = v1.__proto__;
v2[10] = v2;
const v3 = [v1,2147483647,2147483647,2147483647];
const v4 = Object;
const v5 = v2();
const v7 = "257"();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
