function main() { 
const v1 = [3.0];
v1[v1] = v1;
const v2 = {};
const v4 = Object();
const v5 = v1 in v2;
const v7 = Float32Array();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
