function main() { 
const v1 = [4294967295];
const v2 = [4294967295,4294967295,v1,4294967295,4294967295];
const v3 = [4294967295,v2,4294967295,4294967295];
const v5 = Object();
v1[7] = v2;
const v6 = this;
const v7 = v3 in v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
