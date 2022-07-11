function main() { 
const v1 = [5.0];
v1[v1] = v1;
const v2 = {};
const v3 = [v2,v1,v2];
const v4 = 0;
const v5 = 7;
const v6 = v3 % v2;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
