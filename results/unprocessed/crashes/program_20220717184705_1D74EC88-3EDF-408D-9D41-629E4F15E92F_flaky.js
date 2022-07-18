function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[2] = v1;
const v2 = v1 in v0;
const v4 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
