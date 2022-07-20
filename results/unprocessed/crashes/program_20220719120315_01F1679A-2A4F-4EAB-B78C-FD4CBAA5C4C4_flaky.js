function main() { 
const v1 = [4.0];
v1[7] = v1;
const v3 = Object;
const v4 = [6,6,6];
const v5 = {};
v1[v1] = v4;
const v6 = [6,6,6,6];
const v8 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
