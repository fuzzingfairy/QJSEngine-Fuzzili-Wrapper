function main() { 
const v1 = [5,5,5];
const v2 = {};
const v3 = [v1,v2];
const v4 = Object;
v1[3] = v3;
const v5 = Object;
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
