function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v1[7] = v1;
const v2 = v1 in v0;
const v3 = Object;
const v4 = {};
const v5 = [v4,v4,v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
