function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v0,v0,v0,v0];
v3[1] = v3;
const v4 = v3 / v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
