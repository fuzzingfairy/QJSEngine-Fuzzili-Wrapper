function main() { 
const v1 = new Int8Array();
const v2 = {};
const v3 = [v2];
v3[0] = v3;
const v4 = v1.subarray(...v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
